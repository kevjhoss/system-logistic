import { el, createButton, create } from '../components/globalFunctions.js';
import { insertButtons } from './changeLayout.js';
import { Progress } from '../NuevoEnvio/components/progress.js';
import { snipper } from '../components/Snipper.js';
import {saveDetails} from './fetchingData.js';

const clearData = async () => {
  const section = el("section");
  const form = el("#box-envio");
  localStorage.clear();
  localStorage.setItem("domicilio", "is-active");
  if (el("content-destiny") !== null) {
    const { FormOrigin } = await import("./FormOrigin/createShadow.js");
    form.replaceChild(new FormOrigin, el("content-destiny"));
    section.replaceChild(new Progress("is-active-origen"), el("progress-barra"))

    while (el(".btn--box")) form.removeChild(el(".btn--box"));
    form.removeChild(el(".btn--cancel"));
    return form.removeChild(el(".btn-prev--grid"));
  }
  if (el("content-shipment") !== null) {
    const { FormOrigin } = await import("./FormOrigin/createShadow.js");
    form.replaceChild(new FormOrigin, el("content-shipment"));
    section.replaceChild(new Progress("is-active-origen"), el("progress-barra"))

    const btnNext = createButton("button", "Siguiente");
    btnNext.classList.add("btn--action", "btn-action--text", "btn-next--grid");
    btnNext.addEventListener("click", next);
    form.removeChild(el(".btn--cancel"));
    form.removeChild(el(".btn-prev--grid"));
    return form.replaceChild(btnNext, el(".btn-next--grid"));
  }
}

const prev = async () => {
  const section = el("section");
  const form = el("#box-envio");
  if (el("content-destiny") !== null) {
    const { FormOrigin } = await import('./FormOrigin/createShadow.js')
    form.replaceChild(new FormOrigin, el("content-destiny"));
    section.replaceChild(new Progress("is-active-origen"), el("progress-barra"))

    while (el(".btn--box")) {
      form.removeChild(el(".btn--box"));
    }
    form.removeChild(el(".btn--cancel"));
    return form.removeChild(el(".btn-prev--grid"));
  }

  if (el("content-shipment") !== null) {
    const { FormDestiny } = await import("./FormDestiny/createShadow.js");
    const { formHomeDelivery } = await import("./FormDestiny/dataForm.js");
    form.replaceChild(new FormDestiny(formHomeDelivery), el("content-shipment"));
    section.replaceChild(new Progress("is-active-destino"), el("progress-barra"))

    const btnNext = createButton("button", "Siguiente");
    btnNext.classList.add("btn--action", "btn-action--text", "btn-next--grid");
    btnNext.addEventListener("click", next);
    form.replaceChild(btnNext, el(".btn-next--grid"));
    return insertButtons(form);
  }
}

const next = async () => {
  const section = el("section");
  const form = el("#box-envio");
  if (el("content-origin") !== null) {
    form.replaceChild(snipper("snipper-form"), el("content-origin"));

    const { FormDestiny } = await import("./FormDestiny/createShadow.js");
    const { formHomeDelivery } = await import("./FormDestiny/dataForm.js");
    if (customElements.get("content-destiny") === undefined) customElements.define("content-destiny", FormDestiny);
    form.replaceChild(new FormDestiny(formHomeDelivery), el("form > section"));
    section.replaceChild(new Progress("is-active-destino"), el("progress-barra"))

    form.classList.remove("l-origin");
    form.classList.add("l-destiny");
    const btnCancel = createButton("button", "Cancelar");
    btnCancel.classList.add("btn--cancel", "btn-action--text");
    btnCancel.addEventListener("click", clearData);
    const btnPrev = createButton("button", "Atrás");
    btnPrev.classList.add("btn--action", "btn-action--text", "btn-prev--grid");
    btnPrev.addEventListener("click", prev);
    form.insertBefore(btnPrev, el(".btn-next--grid"));
    form.insertBefore(btnCancel, el(".btn-next--grid"));
    return insertButtons(form);
  }

  if (el("content-destiny") !== null) {

    form.replaceChild(snipper("snipper-form"), el("content-destiny"));

    const { FormShipment } = await import("./FormShipment/createShadow.js");
    if (customElements.get("content-shipment") === undefined) customElements.define("content-shipment", FormShipment);
    form.replaceChild(new FormShipment, el("form > section"));
    section.replaceChild(new Progress("is-active-envio"), el("progress-barra"))

    while (el(".btn--box")) {
      form.removeChild(el(".btn--box"))
    };
    const btnPay = createButton("button", "Cotizar y Pagar");
    btnPay.textContent = "Cotizar y pagar";
    btnPay.classList.add("btn--action", "btn-action--text", "btn-next--grid");
    btnPay.addEventListener("click", () => {
      el(".container__payment").style.display = "grid";
      el(".btn-close.is-payment").addEventListener("click", () => {
        el(".container__payment").style.display = "none";
      });
      el("#form-checkout__submit").addEventListener("click", async () => {
        saveDetails();
        const { renderLayout } = await import("../MisEnvios/createBox.js");
        renderLayout();
        el("#container__result").style.display = "none";
        el("#success-response").style.display = "none";
        const btn = el(".active-link");
        btn.classList.remove("active-link");
        const parent = el(".misenvios").parentNode;
        parent.classList.add("active-link");
        el(".container__payment").style.display = "none";
      })

    })
    return form.replaceChild(btnPay, el(".btn-next--grid"));
  }
}

export {
  next
}
