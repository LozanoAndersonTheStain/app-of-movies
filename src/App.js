import React from 'react'
import Peliculas from './components/Peliculas/Peliculas'
import Titulo from './components/Title/Titulo'
import Busqueda from './components/CampoBusqueda/Busqueda'

const App = () => {
  return (
    <div>
      <Titulo />
      <Busqueda />
      <Peliculas />
    </div>
  )
}

export default App
