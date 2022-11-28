<?php
class UserAddressee extends EntityBase {
  private string $destinatario;
  private string $numero_documento;
  private string $direccion;
  private string $localidad;
  private string $provincia;
  private string $codigo_postal;
  private string $telefono;
  private string $email;
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

  public function save() {
    $query = "INSERT INTO destinatarios (nombre_destinatario, numero_documento, direccion, localidad, provincia, codigo_postal, telefono, correo_electronico)
              VALUES (
                \"$this->destinatario\",
                \"$this->numero_documento\",
                \"$this->direccion\",
                \"$this->localidad\",
                \"$this->provincia\",
                \"$this->codigo_postal\",
                \"$this->telefono\",
                \"$this->email\"
              )";
    $this->db()->query($query);
    return ["id" => $this->db()->insert_id];
  }
}
?>
