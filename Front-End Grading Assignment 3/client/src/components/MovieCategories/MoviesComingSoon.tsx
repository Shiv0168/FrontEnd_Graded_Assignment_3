import { useEffect, useState } from 'react'
import IMovies from '../../model/IMovies'
import { Movies } from '../Movies'
import { moviesComingSoonData } from '../../service/moviesApi'

export const MoviesComingSoon = () => {

    const [movies, setMovies] = useState<IMovies[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() =>{
      const fectchMovies = async () =>{
          const response = await moviesComingSoonData();
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
