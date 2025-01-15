import C_verAlumnos from './controller/c_verAlumnos.js' 
       let selectCurso = document.getElementById('Curso')
       let div = document.getElementById('Principal')

       selectCurso.addEventListener('change',async (event)=>{
         const informacion = new C_verAlumnos()
         let datosAlumnos = await informacion.verAlumnos()
         let datosPruebas = await informacion.verPruebas()
         console.log(datosAlumnos)
         console.log(datosPruebas)
         
         const fragment = document.createDocumentFragment()
         datosPruebas.forEach(dato => {
              const titulo = document.createElement('h3')
              titulo.textContent = dato.nombre
              fragment.appendChild(titulo)

          const select = document.createElement('select')
          const optionDefault = document.createElement('option')
          optionDefault.textContent = 'Selecciona un alumno'
          optionDefault.disabled = true
          optionDefault.selected = true
          select.appendChild(optionDefault)
              datosAlumnos.forEach(dato => {
                  const option = document.createElement('option')
                  
                  option.textContent = dato.nombre
                  option.value = dato.nombre
                  select.appendChild(option)
              })
              fragment.appendChild(select)

           select.addEventListener('change', (event)=>{
           })

         })

         div.appendChild(fragment)
        
       })

         
         div.appendChild(button)



    
