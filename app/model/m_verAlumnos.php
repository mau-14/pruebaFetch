<?php 
Class M_verAlumnos {
    private $conexion;

    public function __construct()
    { 
      try{
        require_once '../config/configDb.php';
        $this->conexion = new mysqli(SERVIDOR,USUARIO,PASSWORD,BBDD);
        if($this->conexion->connect_error){
          throw new Exception('No se pudo conectar a la base de datos');
        }
      }catch(Throwable $th){
        error_log($th->getMessage());
      }
    }


    public function obtenerDatos(){
      return('Todo ok');
    }
}

