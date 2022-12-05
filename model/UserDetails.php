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

  public function getDetailsEnvios($id_cliente) {
    $query = "SELECT E.*,DS.* FROM detalle_envios AS detail
              INNER JOIN envios AS E
              ON detail.id_envio = E.id_envio
              INNER JOIN destinatarios AS DS
              ON detail.id_destinatario = DS.id_destinatario
              INNER JOIN clientes AS C
              ON detail.id_cliente = C.id_cliente
              WHERE C.id_cliente = $id_cliente";
    $result = $this->db()->query($query);
    while ($row = $result->fetch_object()) {
      $resultSet[] = $row;
    }
    return $resultSet;
   
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
