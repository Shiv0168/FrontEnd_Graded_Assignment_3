import { useEffect, useState } from 'react'
import IMovies from '../../model/IMovies'
import { favouriteMoviesData } from '../../service/moviesApi'
import { Movies } from '../Movies'

export const FavourtiesMovies = () => {

    const [movies, setMovies] = useState<IMovies[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() =>{
      const fectchMovies = async () =>{
          const response = await favouriteMoviesData();
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
