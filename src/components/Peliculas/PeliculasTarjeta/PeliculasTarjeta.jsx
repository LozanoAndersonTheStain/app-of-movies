import React from 'react'
import './PeliculasTarjeta.css'

const PeliculasTarjeta = (props) => {
  return (
    <div className="-container-tarjets">
      <div className='container-imagen'>
        <img className="img" src={props.url} alt="" />
      </div>
      <h2 className="-titulo-tarjet">{props.name}</h2>
      <p className="sub-titulo">{props.reseña}</p>
      <span><a href="#">Ver Detalles</a></span>
    </div>
  )
}

export default PeliculasTarjeta
