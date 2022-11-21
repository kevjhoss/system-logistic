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

    if($_POST['password'] !== $this->pass->desencriptar($result[0]->password)) {
      $status = ['status' => 'error-password'];
      die(json_encode($status));
    }

    $_SESSION['name'] = $result[0]->name;
    $_SESSION['lastname'] = $result[0]->lastname;
    $_SESSION['user'] = $result[0]->email;
    $status = ['status' => 'success'];
    die(json_encode($status));
  }
}
?>
