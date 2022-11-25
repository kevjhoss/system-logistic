<?php
final class LoginController extends ControllerBase {
  public $connect;
  public $adapter;
  public $pass;
  public function __construct() {
    parent::__construct();
    $this->pass=new Encriptacion();
    $this->connect=new Connection();
    $this->adapter=$this->connect->connect();
  }

  public function index() {
    $this->view('login');
  }

  public function login() {
    $user=new User($this->adapter);

    $result=$user->getByEmail($_POST['user']);

    if($result === null) {
      $status = ['status' => 'error-email'];
      die(json_encode($status));
    }

    if($_POST['password'] !== $result[0]->password) {
      $status = ['status' => 'error-password'];
      die(json_encode($status));
    }

    $_SESSION['user'] = $result[0]->correo_electronico;
    $status = ['status' => 'success'];
    die(json_encode($status));
  }

  public function create() {
    $user = new User($this->adapter);
    $user->setFullName($_POST['fullName']);
    $user->setNumberDocument($_POST['document-number']);
    $user->setDirrection($_POST['dirrection']);
    $user->setLocation($_POST['location']);
    $user->setProvince($_POST['province']);
    $user->setPostal($_POST['code-postal']);
    $user->setTelefono($_POST['phone']);
    $user->setEmail($_POST['email']);
    $user->setPassword($_POST['password']);
    $user->save();
    die(json_encode(['status' => 'success']));
  }
}
?>
