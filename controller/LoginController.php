<?php
class LoginController extends ControllerBase{
  public $connect;
  public $adapter;
  public function __construct() {
    parent::__construct();
    $this->connect=new Connection();
    $this->adapter=$this->connect->connect();
  }

  public function index(){
    $this->view("loginIndex",[]);
  }

  public function login(){
    //Creamos el objeto usuario
    $user=new User($this->adapter);
    //Conseguimos todos los usuarios
    $result=$user->getByEmail($_POST["email"]);
    if($result != null){
      if(password_verify($_POST["password"], $result[0]->password)) {
        //session_start();
        $_SESSION['name'] = $result[0]->name;
        $_SESSION['lastname'] = $result[0]->lastname;
        $_SESSION['email'] = $result[0]->email;
        //var_dump($result);
        $resultSet = array("result" => $result, "status" => "ok");
      } else {
        $resultSet = array("result" => $result, "status" => "passBad");
      }
    } else {
      $resultSet = array("status" => "emailBad");
    }
    die(json_encode($resultSet));
  }
}
?>
