class M_verAlumnos {

  async listarAlumnos(){

    try{
      const response = await fetch('./app/controller/c_verAlumnos.php')
      const data = await response.json()
      return data
    }catch(error){
      console.log(error)
    }
  }
  async listarPruebas(){

      try{
        const response = await fetch('./app/controller/c_verPruebas.php')
        const data = await response.json()
        return data
      }catch(error){
        console.log(error)
      }
    }
}


export default M_verAlumnos
