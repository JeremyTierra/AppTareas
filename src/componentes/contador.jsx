import React from 'react'
import "../styles/contador.css"

function Contador({ completadas }) {
    return (

        <div className='contenedorContadores'>
            <div className='completados'>{completadas}</div>
            <h1>Completados</h1>

        </div>
    )
}
export default Contador;