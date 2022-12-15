<?php
class UserEnvio extends EntityBase {
  private $peso;
  private $alto;
  private $ancho;
  private $largo;
  private $costo;
  private $province;
  private $sucursal;
  private $tipo_envio;
  private $metodo_pago;
  private $estado;
  public function __construct(string $table, $adapter) {
    parent::__construct($table, $adapter);
  }

  public function setPeso($peso) {
    $this->peso = $peso;
  }

  public function setAlto($alto) {
    $this->alto = $alto;
  }

  public function setAncho($ancho) {
    $this->ancho = $ancho;
  }

  public function setLargo($largo) {
    $this->largo = $largo;
  }

  public function setCosto($costo) {
    $this->costo = $costo;
  }

  public function setProvince($province) {
    $this->province = $province;
  }

  public function setSucursal($sucursal) {
    $this->sucursal = $sucursal;
  }

  public function setTipo($tipo) {
    $this->tipo_envio = $tipo;
  }

  public function setPago($pago) {
    $this->metodo_pago = $pago;
  }

  public function setEstado($estado) {
    $this->estado = $estado;
  }

  public function save() {
    $query = "INSERT INTO envios (peso, alto, ancho, largo, costo_referencia, provincia_origen, sucursal_origen, tipo_envio, metodo_pago, estado)
              VALUES (
                \"$this->peso\",
                \"$this->alto\",
                \"$this->ancho\",
                \"$this->largo\",
                \"$this->costo\",
                \"$this->province\",
                \"$this->sucursal\",
                \"$this->tipo_envio\",
                \"$this->metodo_pago\",
                \"$this->estado\"
              )";
    $this->db()->query($query);
    return ["id" => $this->db()->insert_id];
  }
}
?>
