<?php
class EntityBase {
  //ESTA ENTIDAD NOS VA A PERMITIR TENER ALGUNAS QUERIES POR DEFUALT
  private $table, $db, $connection;
  public function __construct(string $table, $adpater) {
    require_once 'Encriptacion.php';
    $this->table = $table;
    $this->connection = null;
    $this->db = $adpater;
  }

  public function getConnection() {
    return $this->connection;
  }

  public function db() {
    return $this->db;
  }

  public function getAll() {
    $query = $this->db->query("SELECT * FROM $this->table");

    while ($row = $query->fetch_object()) {
      $resultSet[] = $row;
    }

    return $resultSet;
  }

  public function getById($id) {
    $query = $this->db->query("SELECT * FROM $this->table WHERE id=$id");

    if ($row = $query->fetch_object()) {
      $resultSet = $row;
    }

    return $resultSet;
  }

  public function getByEmail($email) {
    $query = $this->db->query("SELECT * FROM $this->table WHERE correo_electronico='$email'");
    $resultSet = [];

    while ($row = $query->fetch_object()) {
      $resultSet[] = $row;
    }
    return $resultSet;
  }

  public function getBy($column, $value) {
    $query = $this->db->query("SELECT * FROM $this->table WHERE $column=$value");

    while ($row = $query->fetch_object()) {
      $resultSet[] = $row;
    }

    return $resultSet;
  }

  public function deleteById($id) {
    $query = $this->db->query("DELETE FROM $this->table WHERE id=$id");
    return $query;
  }

  public function deleteBy($column, $value) {
    $query = $this->db->query("DELETE FROM $this->table WHERE $column='$value'");
    return $query;
  }
}
