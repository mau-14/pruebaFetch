class M_verAlumnos {

  async listar(){

    try{
      const response = await fetch('../../app/config/configDb.php')
      const data = await response.json()
      return data
    }catch(error){
      console.log(error)
    }
  }

}


export default M_verAlumnos
