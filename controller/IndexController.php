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
    $this->view("home");
  }
}
