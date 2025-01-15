<?php 



    require_once '../model/m_verAlumnos.php';
    $listarAlumnos = new M_verAlumnos();


    $alumnos = $listarAlumnos->obtenerDatos();
    if($alumnos){
      echo json_encode($alumnos);
    }else{
      echo json_encode(['mensaje'=>'no se encontraron alumnos, algo anda mal']);
    }



