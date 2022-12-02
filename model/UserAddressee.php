<?php
class UserAddressee extends EntityBase {
  private $destinatario;
  private $numero_documento;
  private $direccion;
  private $localidad;
  private $provincia;
  private $codigo_postal;
  private $telefono;
  private $email;
  private $observaciones;
  private $sucursal;
  public function __construct(string $table, $adapter) {
    parent::__construct($table, $adapter);
  }

  public function setDestinatario($destinatario) {
    $this->destinatario = $destinatario;
  }

  public function setDni($numero_documento) {
    $this->numero_documento = $numero_documento;
  }

  public function setDireccion($direccion) {
    $this->direccion = $direccion;
  }

  public function setLocalidad($localidad) {
    $this->localidad = $localidad;
  }

  public function setProvincia($provincia) {
    $this->provincia = $provincia;
  }

  public function setCP($codigo_postal) {
    $this->codigo_postal = $codigo_postal;
  }

  public function setPhone($telefono) {
    $this->telefono = $telefono;
  }

  public function setEmail($email) {
    $this->email = $email;
  }

  public function setObservaciones($observaciones) {
    $this->observaciones = $observaciones;
  }

  public function setSucursal($sucursal) {
    $this->sucursal = $sucursal;
  }

  public function save() {
    if ($this->numero_documento == "null") {
      $query = "INSERT INTO destinatarios (nombre_destinatario, provincia, telefono, correo_electronico, observaciones, sucursal)
              VALUES (
                \"$this->destinatario\",
                \"$this->provincia\",
                \"$this->telefono\",
                \"$this->email\",
                \"$this->observaciones\",
                \"$this->sucursal\"
              )";
      $this->db()->query($query);
      return ["id" => $this->db()->insert_id];
    }

    $query = "INSERT INTO destinatarios (nombre_destinatario, numero_documento, direccion, localidad, provincia, codigo_postal, telefono, correo_electronico, observaciones)
              VALUES (
                \"$this->destinatario\",
                \"$this->numero_documento\",
                \"$this->direccion\",
                \"$this->localidad\",
                \"$this->provincia\",
                \"$this->codigo_postal\",
                \"$this->telefono\",
                \"$this->email\",
                \"$this->observaciones\"
              )";
    $this->db()->query($query);
    return ["id" => $this->db()->insert_id];
  }
}
?>
