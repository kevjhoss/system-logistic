<?php
//FUNCIONES PARA EL CONTROLADOR FRONTAL
 
function loadController($controller){
    $controlador=ucwords($controller).'Controller';
    $strFileController='controller/'.$controlador.'.php';
     
    if(!is_file($strFileController)){
        $strFileController='controller/'.ucwords(DEFAULT_CONTROLLER).'Controller.php';  
    }
     
    require_once $strFileController;
    $controllerObj=new $controlador();
    return $controllerObj;
}
 
function loadAction($controllerObj,$action){
    $accion=$action;
    $controllerObj->$accion();
}
 
function launchAction($controllerObj){
    if(isset($_GET["action"]) && method_exists($controllerObj, $_GET["action"])){
        loadAction($controllerObj, $_GET["action"]);
    }else{
        loadAction($controllerObj, DEFAULT_ACTION);
    }
}
 
?>