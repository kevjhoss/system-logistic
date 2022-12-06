<!-- Payment -->
<div class="container__payment">
    <!-- Formulario -->
    <form id="form-checkout">
        <button type="button" class="btn-close is-payment">
            <?php echo Icons('close', '2.2em', 'hsl(0,100%,50%)')?>
        </button>
        <label for="mercado-pago">
            <input type="radio" name="pago" id="mercado-pago" value="pago">
            <img src="/dist/images/mercado-pago.jpg" alt="mercado-pago"/>
            <span>Mercado Pago</span>
        </label>
        <label for="tranferencia">
            <input type="radio" name="pago" id="tranferencia" value="pago">
            <img src="/dist/images/transferencia.jpg" alt="mercado-pago"/>
            <span>Transferencia</span>
        </label>
        <label for="efectivo">
            <input type="radio" name="pago" id="efectivo" value="pago">
            <img src="/dist/images/pago-facil.png" alt="mercado-pago"/>
            <span>Efectivo</span>
        </label>
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
