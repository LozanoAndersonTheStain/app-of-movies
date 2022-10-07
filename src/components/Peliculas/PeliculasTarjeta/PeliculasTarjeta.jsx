import React from 'react'
import './PeliculasTarjeta.css'

const PeliculasTarjeta = (props) => {
  return (
    <div>
      <img className="img" src={props.url} alt="" />
      <h2>{props.name}</h2>
      <p>Ests pelicula es buena</p>
    </div>
  )
}

export default PeliculasTarjeta
