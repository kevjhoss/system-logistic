<?php
class UserEnvio extends EntityBase {
  private $peso;
  private $alto;
  private $ancho;
  private $largo;
  private $costo;
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

  public function save() {
    $query = "INSERT INTO envios (peso, alto, ancho, largo, costo_referencia)
              VALUES (
                \"$this->peso\",
                \"$this->alto\",
                \"$this->ancho\",
                \"$this->largo\",
                \"$this->costo\"
              )";
    $this->db()->query($query);
    return ["id" => $this->db()->insert_id];
  }
}
?>
