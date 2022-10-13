import React from 'react'
import PeliculasTarjeta from './PeliculasTarjeta/PeliculasTarjeta'
import './Peliculas.css'

const peliculasInfo = [
  {
    id: 1,
    name: 'Abracadabra',
    url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t7CKYUNVdJePAfhvwSqlp4vsX68.jpg',
    reseña:
      'Es una pélicula que tal vez muchos han esperado por años, por fin las brujas regresan a la vida...',
  },
  {
    id: 2,
    name: 'Abracadabra',
    url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t7CKYUNVdJePAfhvwSqlp4vsX68.jpg',
    reseña:
      'Es una pélicula que tal vez muchos han esperado por años, por fin las brujas regresan a la vida...',
  },
  {
    id: 3,
    name: 'Abracadabra',
    url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t7CKYUNVdJePAfhvwSqlp4vsX68.jpg',
    reseña:
      'Es una pélicula que tal vez muchos han esperado por años, por fin las brujas regresan a la vida...',
  },
  {
    id: 4,
    name: 'Abracadabra',
    url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t7CKYUNVdJePAfhvwSqlp4vsX68.jpg',
    reseña:
      'Es una pélicula que tal vez muchos han esperado por años, por fin las brujas regresan a la vida...',
  },
]

const Peliculas = () => {
  return (
    <div className="container-peliculas">
      {peliculasInfo.map((pelicula) => (
        <PeliculasTarjeta
          url={pelicula.url}
          name={pelicula.name}
          reseña={pelicula.reseña}
        />
      ))} 

      {/* <PeliculasTarjeta
        url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xhBQorOLsX3jAIMh8c5MqkX6JXm.jpg"
        name="Spiderman 'Sin camino a casa'"
        reseña="Es una de las mejores peliculas estrenadas este año"
      /> */}
    </div>
  )
}

export default Peliculas
