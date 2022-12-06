<!-- Payment -->
<div class="container__payment">
    <!-- Formulario -->
    <form id="form-checkout">
        <button type="button" class="btn-close is-payment">
            <?php echo Icons('close', '2.2em', 'hsl(0,100%,50%)')?>
        </button>
        <input type="radio" name="pago" id="pago" value="pago">
        <input type="radio" name="pago" id="pago" value="pago">
        <input type="radio" name="pago" id="pago" value="pago">
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
        <p>Transferencia exitosa</p>
        <button type="button" class="btn-go-result">IR A MIS ENVIOS</button>
    </div>
</div>
