import M_verAlumnos from "../model/m_verAlumnos";

class C_verAlumnos{

  constructor(){
    const verAlumnos = new M_verAlumnos()
    let alumnos = verAlumnos.listar()
    console.log(alumnos)
  }
}

export default C_verAlumnos
