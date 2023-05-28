import { Col, Row } from 'react-bootstrap';
import IMovies from '../model/IMovies'
import { LoadingStatus } from '../components/LoadingStatus';
import { useEffect, useState } from 'react';
import { TopRatedIndiaListFetch } from '../service/MovieDetailFetch/MovieListApiFetch';
import { TopRatedIndiaMovieItem } from '../movie-card/TopRatedIndiaMovieItem';

export const TopRatedIndiaList = () => {

  const [movieList, setMovieList] = useState<IMovies[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(()=>{
    const fetchData = async()=>{
      const response = await TopRatedIndiaListFetch()
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
            <h2>TOP RATED INDIA</h2> 
          }
          <Row>
            {
              movieList.map(({id , title , posterurl }) => {
                return (
                    <Col sm={1} lg={3} md={1} key={id} className='my-3'>
                    <TopRatedIndiaMovieItem  title={title} imgUrl={posterurl} id={id}/>
                    </Col>
                )
              })
            }
          </Row>     
     </div>
    </>
  )
}

