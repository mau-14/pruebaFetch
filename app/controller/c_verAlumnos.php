<?php 

Class C_verAlumnos{

  private $listarAlumnos;

  public function __construct()
  {
    require_once '../model/m_verAlumnos.php';
    $this->listarAlumnos = new M_verAlumnos();
  }

  public function datosAlumnos(){
  

    $alumnos = $this->listarAlumnos->obtenerDatos();
    if($alumnos){
      echo json_encode($alumnos);
    }else{
      echo json_encode('mensaje'=>'no se encontraron alumnos, algo anda mal');
    }
  }

}
