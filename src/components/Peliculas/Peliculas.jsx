import React from 'react'
import PeliculasTarjeta from './PeliculasTarjeta/PeliculasTarjeta'
import './Peliculas.css'

const Peliculas = () => {
  return (
    <div className="container-peliculas">
      <PeliculasTarjeta
        url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t7CKYUNVdJePAfhvwSqlp4vsX68.jpg"
        name="Abracadabra"
      />

      <PeliculasTarjeta
        url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eo4DVjhzDHU3VvUADGjyXrpuHfg.jpg"
        name="Depredador 'La presa'"
      />

      <PeliculasTarjeta
        url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sD5mBllYcBR5sQTyR2VGYhpHf6B.jpg"
        name="Escupire sobre tu tumba"
      />
    </div>
  )
}

export default Peliculas
