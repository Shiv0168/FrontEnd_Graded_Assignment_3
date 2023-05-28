import { Col, Row } from 'react-bootstrap';
import IMovies from '../model/IMovies'
import { LoadingStatus } from '../components/LoadingStatus';
import { useEffect, useState } from 'react';
import { MoviesInTheatersListFetch } from '../service/MovieDetailFetch/MovieListApiFetch';
import { MovieInTheatersMovieItem } from '../movie-card/MovieInTheatersMovieItem';

export const MoviesInTheatersList = () => {

  const [movieList, setMovieList] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await MoviesInTheatersListFetch()
      setMovieList(response)
      setLoading(false)
      }
      fetchData();
  },[])

  return (
    <>
      <div className='pt-5 mt-5'>
          {loading&&<LoadingStatus/>}
          {
            <h2>MOVIES IN THEATERS</h2> 
          }
          <Row>
            {
              movieList.map(({id , title , posterurl }) => {
                return (
                    <Col sm={1} lg={3} md={1} key={id} className='my-3'>
                    <MovieInTheatersMovieItem  title={title} imgUrl={posterurl} id={id}/>
                    </Col>
                )
              })
            }
          </Row>     
     </div>
    </>
  )
}

