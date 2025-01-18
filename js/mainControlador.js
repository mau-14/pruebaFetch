import C_verAlumnos from './controller/c_verAlumnos.js'

const selectCurso = document.getElementById('Curso')
const div = document.getElementById('Principal')

selectCurso.addEventListener('change', async () => {
    await crearSelects()
})

async function crearSelects() {
    try {
        const informacion = new C_verAlumnos()
        const [datosAlumnos, datosPruebas] = await Promise.all([
            informacion.verAlumnos(),
            informacion.verPruebas()
        ])

        console.log(datosAlumnos)
        console.log(datosPruebas)

        div.innerHTML = ''

        const fragment = document.createDocumentFragment()

        datosPruebas.forEach(prueba => {
            const titulo = document.createElement('h3')
            titulo.textContent = prueba.nombre
            fragment.appendChild(titulo)

            const select = document.createElement('select')

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
                actualizarSelects(valor)
            })
        })

        div.appendChild(fragment)

    } catch (error) {
        console.error('Error al crear selects:', error)
    }
}


function actualizarSelects(nombreAlumno){
  
}
