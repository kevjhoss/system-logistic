<?php
class User extends EntityBase {
  //private $id_cliente;
  private $nombre_cliente;
  private $numero_documento;
  private $dirrecion;
  private $localidad;
  private $provincia;
  private $codigo_postal;
  private $telefono;
  private $correo_electronico;
  private $password;
  private $pass;

  public function __construct(string $name, $adapter) {
    $table = $name;
    parent::__construct($table, $adapter);
    $this->pass=new Encriptacion();
  }

  public function setFullName($nombre_cliente) {
    $this->nombre_cliente = $nombre_cliente;
  }

  public function setNumberDocument($document) {
    $this->numero_documento = $document;
  }

  public function setDirrection($dirrecion) {
    $this->dirrecion = $dirrecion;
  }

  public function setLocation($localidad) {
    $this->localidad = $localidad;
  }

  public function setProvince($provincia) {
    $this->provincia = $provincia;
  }

  public function setPostal($codigo_postal) {
    $this->codigo_postal = $codigo_postal;
  }

  public function setTelefono($telefono) {
    $this->telefono = $telefono;
  }

  public function setEmail($correo_electronico) {
    $this->correo_electronico = $correo_electronico;
  }

  public function setPassword($password) {
    $this->password = $password;
  }

  public function getDataUser() {
    $query = "SELECT * FROM clientes WHERE correo_electronico='" . $_SESSION['user'] . "'";
    $result = $this->db()->query($query);
    while ($row = $result->fetch_object()) {
      $data = $row;
    }
    $resultSet = [[
      "id_cliente" => $data->id_cliente,
      "nombre_cliente" => $data->nombre_cliente,
      "numero_documento" => $data->numero_documento,
      "direccion" => $data->direccion,
      "localidad" => $data->localidad,
      "provincia" => $data->provincia,
      "codigo_postal" => $data->codigo_postal,
      "telefono" => $data->telefono,
      "correo_electronico" => $data->correo_electronico,
      "password" => $this->pass->desencriptar($data->password)
    ]];
    return $resultSet;
  }

  public function save() {
    $pass_hashed = $this->pass->encriptar($this->password);
    $query = "INSERT INTO clientes (nombre_cliente, numero_documento, direccion, localidad, provincia, codigo_postal, telefono, correo_electronico, password)
              VALUES(
                \"$this->nombre_cliente\",
                \"$this->numero_documento\",
                \"$this->dirrecion\",
                \"$this->localidad\",
                \"$this->provincia\",
                \"$this->codigo_postal\",
                \"$this->telefono\",
                \"$this->correo_electronico\",
                \"$pass_hashed\");";
    $save = $this->db()->query($query);
    return ['status' => $save];
  }

  private function opt($key, $value) {
    if (!isset($_POST[$key])) {
      return "";
    }
    return "$key='$value',";
  }

  public function update() {
    $pass_hashed = $this->pass->encriptar($_POST['password']);
    $data = "UPDATE clientes SET
              " . $this->opt('nombre_cliente', $_POST['nombre_cliente']) ."
              " . $this->opt('numero_documento', $_POST['numero_documento']) . "
              " . $this->opt('direccion', $_POST['direccion']) . "
              " . $this->opt('localidad', $_POST['localidad']) . "
              " . $this->opt('provincia', $_POST['provincia']) . "
              " . $this->opt('codigo_postal', $_POST['codigo_postal']) . "
              " . $this->opt('telefono', $_POST['telefono']) . "
              " . $this->opt('correo_electronico', $_POST['correo_electronico']) . "
              " . $this->opt('password', $pass_hashed);
    $formated = preg_replace("/[,]$/", "", trim($data));
    $query = $formated . "\n WHERE (id_cliente='" . $_POST['id_cliente'] . "');";
    $save = $this->db()->query($query);
    return ["status" => $save];
  }
}
