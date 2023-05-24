import React from 'react'
import "../styles/tarea.css";
function Tarea({ id,tareaTexto, completada,tareaCompletada,eliminarTarea }) {
    return (


        <div className={completada ? "tarea tarea-completada" : "tarea"   } >
            <div className='divTexto' onClick= {()=>tareaCompletada(id)}>
            {tareaTexto }
                </div >
            <button className='boton-eliminar' onClick={()=>eliminarTarea(id)} >
                <i class="bi bi-x-circle"></i>
            </button>
        </div>




    )
}
export default Tarea;