import React, { useState } from 'react'
import "../styles/listaTareas.css"
import Tarea from '../componentes/tarea'
import Contador from "./contador"
import { v4 as uuidv4 } from 'uuid';

function ListaTareas() {

  const [tareas, setTareas] = useState([]);
  const [tareasCompletadas, setTareasCompletadas] = useState(0);


  function tareaCompletada(id) {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;

        if (tarea.completada == true) {
          setTareasCompletadas(tareasCompletadas + 1)

        } else {

          setTareasCompletadas(tareasCompletadas - 1);
        }
      }
      return tarea;
    });

    setTareas(tareasActualizadas);



  }


  function eliminarTarea(id) {
    console.log(id);
    const tareasEliminadas = tareas.filter(tarea => {
      return tarea.id !== id;
    });
    setTareas(tareasEliminadas);
  }


  return (      <>
    <div className="app-tareas">
      <h1 className='titulo'>Mis tareas</h1>


      <div className="lista-tareas">

        {tareas.map(tarea => (
          <Tarea id={tarea.id} tareaTexto={tarea.texto} completada={tarea.completada} tareaCompletada={tareaCompletada} eliminarTarea={eliminarTarea} />
        ))}


      </div>


      <form className='form-tareas' onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        const tarea = {

          id: uuidv4(),
          texto: e.target[0].value,
          completada: false

        }

        setTareas([tarea, ...tareas])
        e.target[0].value = "";
      }}>
        <input className='input-tareas' onChange={(e) => {
          console.log(e.target.value);
        }}></input>
        <button type='submit' className='botonEnvio' >Agregar Tarea</button>
      </form>

    
    </div>
      <Contador completadas={tareasCompletadas}></Contador></>

  )
}
export default ListaTareas;