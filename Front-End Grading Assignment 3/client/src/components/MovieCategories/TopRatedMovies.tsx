import { useEffect, useState } from 'react'
import IMovies from '../../model/IMovies'
import { topRatedMoviesData } from '../../service/moviesApi'
import { Movies } from '../Movies'

export const TopRatedMovies = () => {

    const [movies, setMovies] = useState<IMovies[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() =>{
      const fectchMovies = async () =>{
          const response = await topRatedMoviesData();
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
