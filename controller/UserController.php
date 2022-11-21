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

  public function cuenta() {
    $this->view("cuenta");
  }

  public function misenvios() {
    $this->view("misenvios");
  }

  public function envio() {
    $this->view("envio");
  }

  public function panel() {
    $this->view("panel");
  }
}
