<?php
final class UserController extends ControllerBase {
  public $connect;
  public $adapter;
  public function __construct() {
    parent::__construct();
    $this->connect = new Connection();
    $this->adapter = $this->connect->connect();
  }

  public function index() {
    $this->view("home");
  }

  public function getUserInfo() {
    $user = new User("clientes", $this->adapter);
    $result = $user->getDataUser();
    die(json_encode($result));
  }

  public function getProvince() {
    $user = new User("province", $this->adapter);
    $result = $user->getAll();
    die(json_encode($result));
  }

  public function getSucursal() {
    $user = new User("sucursal", $this->adapter);
    $result = $user->getAll();
    die(json_encode($result));
  }

  public function saveEnvio() {
    $user = new UserEnvio("envios", $this->adapter);
    $user->setPeso($_POST["peso"]);
    $user->setAlto($_POST["alto"]);
    $user->setAncho($_POST["ancho"]);
    $user->setLargo($_POST["largo"]);
    $user->setCosto($_POST["costo"]);
    $user->setProvince($_POST["provincia-origen"]);
    $user->setSucursal($_POST["sucursal-origen"]);
    $user->setTipo($_POST["tipo-envio"]);
    $user->setPago($_POST["metodo-pago"]);
    $user->setEstado($_POST["estado"]);
    $status = $user->save();
    die(json_encode($status));
  }

  public function saveAddressee() {
    $user = new UserAddressee("destinatarios", $this->adapter);
    $user->setDestinatario($_POST["destinatario"]);
    $user->setDni($_POST["numero-documento"]);
    $user->setDireccion($_POST["direccion"]);
    $user->setLocalidad($_POST["localidad"]);
    $user->setProvincia($_POST["provincia"]);
    $user->setCP($_POST["codigo-postal"]);
    $user->setPhone($_POST["telefono"]);
    $user->setEmail($_POST["correo-electronico"]);
    $user->setObservaciones($_POST["observaciones"]);
    $user->setSucursal($_POST["sucursal"]);
    $save = $user->save();
    die(json_encode($save));
  }

  public function saveDetails() {
    $user = new UserDetails("detalle_envios", $this->adapter);
    $user->setIdCliente($_POST["idCliente"]);
    $user->setIdAddressee($_POST["idAddressee"]);
    $user->setIdShipping($_POST["idShipping"]);
    $save = $user->save();
    die(json_encode($save));
  }
}
