<?php
class UserDetails extends EntityBase {
  private string $id_cliente;
  private string $id_addressee;
  private string $id_shipping;

  public function __construct(string $table, $adapter) {
    parent::__construct($table, $adapter);
  }

  public function setIdCliente($id_cliente) {
    $this->id_cliente = $id_cliente;
  }

  public function setIdAddressee($id_addressee) {
    $this->id_addressee = $id_addressee;
  }

  public function setIdShipping($id_shipping) {
    $this->id_shipping = $id_shipping;
  }

  public function save() {
    $query = "INSERT INTO detalle_envios (id_cliente, id_destinatario, id_envio)
              VALUES (
                \"$this->id_cliente\",
                \"$this->id_addressee\",
                \"$this->id_shipping\"
              )";
    $save = $this->db()->query($query);
    return ["status" => $save];
  }
}
?>
