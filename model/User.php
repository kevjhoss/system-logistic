<?php
class User extends EntityBase{
    private $id;
    private $name;
    private $lastname;
    private $email;
    private $password;
     
    public function __construct($adapter) {
        $table="users";
        parent::__construct($table, $adapter);
    }
     
    public function getId() {
        return $this->id;
    }
 
    public function setId($id) {
        $this->id = $id;
    }
     
    public function getName() {
        return $this->name;
    }
 
    public function setName($name) {
        $this->name = $name;
    }
 
    public function getLastname() {
        return $this->lastname;
    }
 
    public function setLastname($lastname) {
        $this->lastname = $lastname;
    }
 
    public function getEmail() {
        return $this->email;
    }
 
    public function setEmail($email) {
        $this->email = $email;
    }
 
    public function getPassword() {
        return $this->password;
    }
 
    public function setPassword($password) {
        $this->password = $password;
    }
 
    public function save(){
        //$query = "SELECT * FROM users WHERE email='".$this->email."'";
        //$result = $this->getByEmail($this->email);
        //if($result){
            $options = array(
                'cost' => 12
            );
            $pass_hashed = password_hash($this->password, PASSWORD_DEFAULT, $options);
            //var_dump($pass_hashed);
            $query="INSERT INTO users (name, lastname, email, password)
                    VALUES('".$this->name."',
                        '".$this->lastname."',
                        '".$this->email."',
                        '".$pass_hashed."');";
            $save=$this->db()->query($query);
            $response = array($save);
        //} else {
        //    $response = array('status'=>'exist', $result);
        //}
        //$this->db()->error;
        return array($response);
    }
    public function update(){
            $query="INSERT INTO users (name, lastname, email, password)
                    VALUES('".$this->name."',
                        '".$this->lastname."',
                        '".$this->email."',
                        '".$this->password."');";
            $query = "UPDATE users SET 
            name = '".$this->name."',
            lastname = '".$this->lastname."',
            email = '".$this->email."',
            password = '".$this->password."'
            
            WHERE (id = '".$this->id."');";
            $save=$this->db()->query($query);
            $response = array($save);
        //} else {
        //    $response = array('status'=>'exist', $result);
        //}
        //$this->db()->error;
        return array($response);
    }
 
}
?>
