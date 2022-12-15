<?php
class Encriptacion {
    private $clave  = '9mge9v5ArANKBFju8Ncm9JPvBh8IRUGBhqp5ElQO';
    private $method = 'aes-256-cbc';

    public function encriptar($valor) {
        $iv = base64_decode("D3dvLWCEX+ouK1GY7+dDfQ==");
        return openssl_encrypt ($valor, $this->method, $this->clave, false, $iv);
    }

    public function desencriptar($valor) {
        $iv = base64_decode("D3dvLWCEX+ouK1GY7+dDfQ==");
        $encrypted_data = base64_decode($valor);
        return openssl_decrypt($valor, $this->method, $this->clave, false, $iv);
    }
}
