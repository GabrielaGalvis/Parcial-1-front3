import React from 'react'
import Styles from '../styles/Fomulario.module.css'
function Card({nombre,materiaFavorita}) {
  return (
    <div >
      <h4 >Hola {nombre}</h4>
      <h4> Sabemos que tu materia favorita es: </h4>
      <div>{materiaFavorita}</div>
    </div>
  )
}

export default Card