<?php
  require_once 'core/sessions.php';
  //Configuración global
  require_once 'config/global.php';
  //Base para los controladores
  require_once 'core/ControllerBase.php';
  //Funciones para el controlador frontal
  require_once 'core/ControllerFront.func.php';

  if ($_GET["controller"] == "Login" && isset($_SESSION["user"])) {
    $controllerObj=loadController(DEFAULT_CONTROLLER);
    launchAction($controllerObj);
  }

  //Cargamos controladores y acciones
  if(isset($_GET["controller"])){
    $controllerObj=loadController($_GET["controller"]);
    launchAction($controllerObj);
  }else{
    $controllerObj=loadController(DEFAULT_CONTROLLER);
    launchAction($controllerObj);
  }
?>
