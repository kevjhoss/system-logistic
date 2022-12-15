import {el} from '../components/globalFunctions.js';
import {saveDetails} from './fetchingData.js';

const mercadopago = new MercadoPago("TEST-19e49b4b-b052-4772-b531-29bbfbab6ca9")//, {

function loadCardForm() {
    const productCost = "1000";
    const productDescription = "DOCUMENTO";
    const payButton = el("#form-checkout__submit");
    const validationErrorMessages= el("#validation-error-messages");

    const form = {
        id: "form-checkout",
        cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Holder name",
        },
        cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
        },
        cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Card number",
            style: {
                fontSize: "1rem"
            },
        },
        expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/YYYY",
            style: {
                fontSize: "1rem"
            },
        },
        securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Security code",
            style: {
                fontSize: "1rem"
            },
        },
        installments: {
            id: "form-checkout__installments",
            placeholder: "Installments",
        },
        identificationType: {
            id: "form-checkout__identificationType",
        },
        identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Identification number",
        },
        issuer: {
            id: "form-checkout__issuer",
            placeholder: "Issuer",
        },
    };

    const cardForm = mercadopago.cardForm({
        amount: productCost,
        iframe: true,
        form,
        callbacks: {
            onFormMounted: error => {
                if (error) return console.warn("Form Mounted handling error: ", error);
                el(".container__payment").style.display = "grid";
            },
            onSubmit: async event => {
                event.preventDefault();
                el(".container__payment").style.display = "none";
                el("#container__result").style.display = "grid";
                el(".loading-message").style.display = "block";
                const {
                    paymentMethodId,
                    issuerId,
                    cardholderEmail: email,
                    amount,
                    token,
                    installments,
                    identificationNumber,
                    identificationType,
                } = cardForm.getCardFormData();

                const datas = await fetch("http://localhost:8080/process_payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                        issuerId,
                        paymentMethodId,
                        transactionAmount: Number(amount),
                        installments: Number(installments),
                        description: productDescription,
                        payer: {
                            email,
                            identification: {
                                type: identificationType,
                                number: identificationNumber,
                            },
                        },
                    }),
                })
                const result = await datas.json();
                if(!result.hasOwnProperty("error_message")) {
                    el(".loading-message").style.display = "none";
                    el("#success-response").style.display = "grid";
                    el("#payment-id").innerText = result.id;
                    el("#payment-status").innerText = result.status;
                    el("#payment-detail").innerText = result.detail;
                    saveDetails();
                    cardForm.unmount();
                } else {
                    el("#error-message").textContent = result.error_message;
                    el("#fail-response").style.display = "block";
                }
            },
            onFetching: (resource) => {
                console.log("Fetching resource: ", resource);
                payButton.setAttribute('disabled', true);
                return () => {
                    payButton.removeAttribute("disabled");
                };
            },
            onCardTokenReceived: (errorData, token) => {
                if (errorData && errorData.error.fieldErrors.length !== 0) {
                    errorData.error.fieldErrors.forEach(errorMessage => {
                        alert(errorMessage);
                    });
                }

                return token;
            },
            onValidityChange: (error, field) => {
                const input = document.getElementById(form[field].id);
                removeFieldErrorMessages(input, validationErrorMessages);
                addFieldErrorMessages(input, validationErrorMessages, error);
                enableOrDisablePayButton(validationErrorMessages, payButton);
            }
        },
    });
};

function removeFieldErrorMessages(input, validationErrorMessages) {
    Array.from(validationErrorMessages.children).forEach(child => {
        const shouldRemoveChild = child.id.includes(input.id);
        if (shouldRemoveChild) {
            validationErrorMessages.removeChild(child);
        }
    });
}

function addFieldErrorMessages(input, validationErrorMessages, error) {
    if (error) {
        input.classList.add('validation-error');
        error.forEach((e, index) => {
            const p = document.createElement('p');
            p.id = `${input.id}-${index}`;
            p.innerText = e.message;
            validationErrorMessages.appendChild(p);
        });
    } else {
        input.classList.remove('validation-error');
    }
}

function enableOrDisablePayButton(validationErrorMessages, payButton) {
    if (validationErrorMessages.children.length > 0) {
        payButton.setAttribute('disabled', true);
    } else {
        payButton.removeAttribute('disabled');
    }
}

export {
    loadCardForm
}
