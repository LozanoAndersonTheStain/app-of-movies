import React from 'react'
import './PeliculasTarjeta.css'

const PeliculasTarjeta = (props) => {
  return (
    <div className='-container-tarjets'>
      <img className="img" src={props.url} alt="" />
      <h2 className='-titulo-tarjet'>{props.name}</h2>
      <p className='sub-titulo'>Esta pelicula es buena</p>
    </div>
  )
}

export default PeliculasTarjeta
