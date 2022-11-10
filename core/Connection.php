<?php
    class Connection {
        //PROPIEDADES DEL OBJETO
        private $driver, $host, $user, $pass, $database, $charset;
        
        // DEFINIMOS EL CONSTRUCTOR EL CUAL NOS PERMITE PODER INSTANCIAR NUESTRAS PROPIEDADES DENTRO DEL MISMO OBJETO
        public function __construct(){
            $db_config = require_once './config/database.php';
            $this->driver = $db_config["driver"] ?? '';
            $this->host = $db_config["host"] ?? '';
            $this->user = $db_config["user"] ?? '';
            $this->pass = $db_config["pass"] ?? '';
            $this->database = $db_config["database"] ?? '';
            $this->charset = $db_config["charset"] ?? '';
        }
        // METODO QUE VAMOS A UTILIZAR PARA REALIZAR LA CONEXION
        public function connect(){
            if($this->driver == "mysql" || $this->driver == null){
                $con = new mysqli($this->host, $this->user, $this->pass, $this->database);
                $con->query("SET NAMES '". $this->charset ."'");

            }
            return $con;
        }
    }

?>
