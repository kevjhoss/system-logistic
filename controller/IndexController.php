<?php
class IndexController extends ControllerBase {
  public $connect;
  public $adapter;
  public function __construct() {
    parent::__construct();
    $this->connect = new Connection();
    $this->adapter = $this->connect->connect();
  }

  public function index() {
    //Creamos el objeto index
    $user = new Index($this->adapter);
    //Conseguimos todos los usuarios
    $allusers = $user->getAll();
    //Cargamos la vista index y le pasamos valores
    $this->view("index", array(
      "allusers" => $allusers,
      "Hola"    => "Desde la Vista"
    ));
  }
}
