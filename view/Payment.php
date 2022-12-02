<!-- Payment -->
<div class="container__payment">
    <!-- Formulario -->
    <form id="form-checkout">
        <input id="form-checkout__cardholderEmail" name="cardholderEmail" type="email" class="form-control" />
        <select id="form-checkout__identificationType" name="identificationType" class="form-control"></select>
        <input id="form-checkout__identificationNumber" name="docNumber" type="text" class="form-control" />
        <input id="form-checkout__cardholderName" name="cardholderName" type="text" class="form-control" />

        <div id="form-checkout__expirationDate" class="form-control h-40"></div>

        <div id="form-checkout__cardNumber" class="form-control h-40"></div>

        <div id="form-checkout__securityCode" class="form-control h-40"></div>

        <select id="form-checkout__issuer" name="issuer" class="form-control"></select>
        <select id="form-checkout__installments" name="installments" type="text" class="form-control"></select>
        <input type="hidden" id="amount" />
        <input type="hidden" id="description" />
        <div id="validation-error-messages"></div>

        <button id="form-checkout__submit" type="submit" class="btn btn-primary btn-block">Pay</button>
    </form>
</div>

<!-- Result -->

<div id="container__result">
    <div class="loading-message" id="box-snipper-pay">
        <div class="snipper"></div>
    </div>
    <div id="success-response">
        <p><b>ID: </b><span id="payment-id"></span></p>
        <p><b>Status: </b><span id="payment-status"></span></p>
        <p><b>Detail: </b><span id="payment-detail"></span></p>
        <button type="button">CERRAR PANEL</button>
        <button type="button">IR A MIS ENVIOS</button>
    </div>
</div>
