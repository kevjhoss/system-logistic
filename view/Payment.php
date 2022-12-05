<!-- Payment -->
<div class="container__payment">
    <!-- Formulario -->
    <form id="form-checkout">
        <button type="button" class="btn-close is-payment">
            <?php echo Icons('close', '2.2em', 'hsl(0,100%,50%)')?>
        </button>
        <label for="medio de pago">Mercado Pago</label>
        <input type="checkbox" name="pago">
        <label for="medio de pago">Pago Efectivo</label>
        <input type="checkbox" name="pago">
        <label for="medio de pago">Tranferencia</label>
        <input type="checkbox" name="pago">
        <button id="form-checkout__submit" type="button" class="btn btn-primary btn-block">Pay</button>
    </form>
</div>

<!-- Result -->

<div id="container__result">
    <div class="loading-message" id="box-snipper-pay">
        <div class="snipper"></div>
    </div>
    <div id="success-response">
        <button type="button" class="btn-close is-result">
            <?php echo Icons('close', '2.2em', 'hsl(0,100%,50%)')?>
        </button>
        <p><b>ID: </b><span id="payment-id"></span></p>
        <p><b>Status: </b><span id="payment-status"></span></p>
        <p><b>Detail: </b><span id="payment-detail"></span></p>
        <button type="button" class="btn-go-result">IR A MIS ENVIOS</button>
    </div>
</div>
