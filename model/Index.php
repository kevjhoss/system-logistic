<?php
class Index extends EntityBase {
  private $id;
  private $name;
  private $lastname;
  private $email;
  private $password;

  public function __construct($adapter) {
    $table = "Clientes";
    parent::__construct($table, $adapter);
  }

  public function getId() {
    return $this->id;
  }

  public function setId($id) {
    $this->id = $id;
  }

  public function getName() {
    return $this->name;
  }

  public function setName($name) {
    $this->name = $name;
  }

  public function getLastname() {
    return $this->lastname;
  }

  public function setLastname($lastname) {
    $this->lastname = $lastname;
  }

  public function getEmail() {
    return $this->email;
  }

  public function setEmail($email) {
    $this->email = $email;
  }

  public function getPassword() {
    return $this->password;
  }

  public function setPassword($password) {
    $this->password = $password;
  }

  public function save() {
    $query = "INSERT INTO users (name, lastname, email, password)
              VALUES(
                '" . $this->name . "',
                '" . $this->lastname . "',
                '" . $this->email . "',
                '" . $this->password . "');";
    $save = $this->db()->query($query);
    //$this->db()->error;
    return $save;
  }
}
