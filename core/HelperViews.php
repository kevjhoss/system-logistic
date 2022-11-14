<?php
class HelperViews {
  public function url($controller=DEFAULT_CONTROLLER,$action=DEFAULT_ACTION){
    $urlString="index.php?controller=".$controller."&action=".$action;
    return $urlString;
  }
  //Helpers para las vistas
}
?>
