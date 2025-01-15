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


    public function obtenerDatosAlumnos() {
      try {
          $sql = 'SELECT * FROM Alumno;';

          $resultado = $this->conexion->query($sql);

          if ($resultado->num_rows > 0) {
              $datos = [];
              while ($fila = $resultado->fetch_assoc()) {
                  $datos[] = $fila;
              }
              return $datos;
          } else {
              return []; 
          }
      } catch (Exception $e) {
          echo 'Error al obtener datos: ' . $e->getMessage();
          return [];
    }
    }
   public function obtenerPruebas() {
        try {
            $sql = 'SELECT * FROM Prueba;';

            $resultado = $this->conexion->query($sql);

            if ($resultado->num_rows > 0) {
                $datos = [];
                while ($fila = $resultado->fetch_assoc()) {
                    $datos[] = $fila;
                }
                return $datos;
            } else {
                return []; 
            }
        } catch (Exception $e) {
            echo 'Error al obtener datos: ' . $e->getMessage();
            return [];
      }
     }
}

