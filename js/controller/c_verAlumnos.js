import M_verAlumnos from "../model/m_verAlumnos.js";

class C_verAlumnos{


  async verAlumnos(){
    const verAlumnos = new M_verAlumnos()
    let alumnos = await verAlumnos.listarAlumnos()
    return alumnos

  }

  async verPruebas(){
    const verPruebas = new M_verAlumnos()
    let pruebas = await verPruebas.listarPruebas()
    return pruebas

  }
}
export default C_verAlumnos
