import { useEffect, useState } from 'react'
import IMovies from '../../model/IMovies'
import { Movies } from '../Movies'
import { moviesInTheatersData } from '../../service/moviesApi'

export const MoviesIntheaters = () => {

    const [movies, setMovies] = useState<IMovies[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() =>{
      const fectchMovies = async () =>{
          const response = await moviesInTheatersData();
          setLoading(false);
          setMovies(response);
      }
      fectchMovies();
  } , []
  )
  return (
    <div><Movies movies={movies} loading={loading}/></div>
  )
}
