import React from 'react'
import './Busqueda.css'

const Busqueda = () => {
  return (
    <div className="container">
      <h1 className="bienvenida">Bienvenidos a nuestra web</h1>
      <h3 className="mensaje-1">
        Aqui encontraras las peliculas y series que te gustan en un abrir y
        cerrar de ojos
      </h3>
      <hr />
      <h4>Busca lo que mas te interesa</h4>

      <div class="input-icono">
        <input
          type="search"
          name="Buscador"
          id="buscador"
          placeholder="Busca la pelicula que mas te gusta"
        />
      </div>
    </div>
  )
}

export default Busqueda
