import C_verAlumnos from './controller/c_verAlumnos.js'

const selectCurso = document.getElementById('Curso')
const div = document.getElementById('Principal')
let i = 1
selectCurso.addEventListener('change', async () => {
        const informacion = new C_verAlumnos()
        const [datosAlumnos, datosPruebas] = await Promise.all([
            informacion.verAlumnos(),
            informacion.verPruebas()
        ])
    await crearSelects(datosAlumnos,datosPruebas)
})

async function crearSelects(datosAlumnos,datosPruebas) {
    try {

        
        div.innerHTML = ''

        const fragment = document.createDocumentFragment()

        datosPruebas.forEach(prueba => {
            const titulo = document.createElement('h3')
            titulo.textContent = prueba.nombre
            fragment.appendChild(titulo)

            const select = document.createElement('select')
            select.id = i++

            const optionDefault = document.createElement('option')
            optionDefault.textContent = 'Ninguno'
            optionDefault.selected = true
            select.appendChild(optionDefault)
          
            datosAlumnos.forEach(alumno => {
                const option = document.createElement('option')
                option.textContent = alumno.nombre
                option.value = alumno.nombre
                select.appendChild(option)
            })

            fragment.appendChild(select)

            select.addEventListener('change', ()=> {
                let idSelectsModificar = []
                let seleccionados = []
                const id = select.id

                for(let e =1;e<i;e++){
                  const selectModificar = document.getElementById(e)
                  const seleccionado = selectModificar.value
                  seleccionados.push(seleccionado)
                    if(e!=id){
                     idSelectsModificar.push(e)
                    }
                }
              console.log(idSelectsModificar)

              console.log(seleccionados)
              idSelectsModificar.forEach(idModificar => {

                const selectModificar = document.getElementById(idModificar)
                const seleccionado = selectModificar.value
                console.log(seleccionado)
                selectModificar.innerHTML = ''
                const defaultOption = document.createElement('option')
                defaultOption.textContent = 'Ninguno'
                defaultOption.selected = true
                selectModificar.appendChild(defaultOption)
                
                // Añadir nuevas opciones
                datosAlumnos.forEach(alumno => {
                      if(!seleccionados.includes(alumno.nombre) || alumno.nombre === seleccionado){
                          console.log(alumno.nombre)
                          const option = document.createElement('option')
                          if(alumno.nombre === seleccionado){
                            option.selected = true
                          }
                          option.value = alumno.nombre
                          option.textContent = alumno.nombre
                          selectModificar.appendChild(option)
                    }
                })
              })

          })
        })

        div.appendChild(fragment)

    } catch (error) {
        console.error('Error al crear selects:', error)
    }
}



       
        
