import M_verAlumnos from "../model/m_verAlumnos.js";

class C_verAlumnos{


  async verAlumnos(){
    const verAlumnos = new M_verAlumnos()
    let alumnos = await verAlumnos.listarAlumnos()
    console.log(alumnos)

  }
}
export default C_verAlumnos
