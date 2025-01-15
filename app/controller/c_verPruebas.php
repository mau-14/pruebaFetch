<?php 


    require_once '../model/m_verAlumnos.php';
    $listarPruebas= new M_verAlumnos();


    $pruebas = $listarPruebas->obtenerPruebas();
    if($pruebas){
      echo json_encode($pruebas);
    }else{
      echo json_encode(['mensaje'=>'no se encontraron alumnos, algo anda mal']);
    }



