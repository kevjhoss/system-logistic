<?php
class ModelBase extends EntityBase {
  private $table;
  public function __construct($table,  $adapter) {
    $this->table = (string) $table;
    parent::__construct($table,  $adapter);
  }

  public function runSql($query) {
    $query = $this->db()->query($query);
    if ($query) {
      if ($query->num_rows > 1) {
        while ($row = $query->fetch_object()) {
          $resultSet[] = $row;
        }
      } elseif ($query->num_rows == 1) {
        if ($row = $query->fetch_object()) {
          $resultSet = $row;
        }
      } else {
        $resultSet = true;
      }
    } else {
      $resultSet = false;
    }
    return $resultSet;
  }
  //Aqui podemos montarnos métodos para los modelos de consulta
}
