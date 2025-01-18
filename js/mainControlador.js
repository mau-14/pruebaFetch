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
            optionDefault.textContent = 'Selecciona un alumno'
            optionDefault.disabled = true
            optionDefault.selected = true
            select.appendChild(optionDefault)
          
            datosAlumnos.forEach(alumno => {
                const option = document.createElement('option')
                option.textContent = alumno.nombre
                option.value = alumno.nombre
                select.appendChild(option)
            })

            fragment.appendChild(select)

            select.addEventListener('change', (event)=> {
                const valor = select.value
                let idSelectsModificar = []
                const id = select.id

                for(let e =1;e<i;e++){
                  if(e!=id){
                    idSelectsModificar.push(e)
                  }
                }
              console.log(idSelectsModificar)

              idSelectsModificar.forEach(idModificar => {

                const selectModificar = document.getElementById(idModificar)
                const seleccionado = selectModificar.value
                console.log(seleccionado)
                const optionsArray = Array.from(selectModificar.options)
                selectModificar.innerHTML = ''
                const defaultOption = document.createElement('option')
                defaultOption.textContent = 'Selecciona un alumno'
                defaultOption.disabled = true
                defaultOption.selected = true
                selectModificar.appendChild(defaultOption)
                
                // Añadir nuevas opciones
                optionsArray.forEach(dato => {
                  if(dato.value != valor){
                    if(!dato.disabled){
                      const option = document.createElement('option')
                      if(dato.value === seleccionado){
                        option.selected = true
                      }
                      option.value = dato.value
                      option.textContent = dato.text
                      selectModificar.appendChild(option)
                    }
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


async function actualizarSelects(nombreAlumno,idSelect,datosAlumnos,datosPruebas){

       
        
}
