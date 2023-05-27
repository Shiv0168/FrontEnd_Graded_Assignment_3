import { Col, Row } from 'react-bootstrap';
import IMovies from '../model/IMovies'
import { MovieItem } from './MovieItem';
import { LoadingStatus } from './LoadingStatus';


type Props = {
    movies : IMovies[];
    loading : boolean
}
export const Movies = ({movies , loading} : Props) => {
  return (
    <>
      <div className='pt-5 mt-5'>
          {loading&&<LoadingStatus/>}
          <Row>
            {
              movies.map(({id , title , posterurl }) => {
                return (
                    <Col sm={1} lg={3} md={1} key={id} className='my-3'>
                    <MovieItem  title={title} imgUrl={posterurl} loading={loading}/>
                    </Col>
                )
              })
            }
          </Row>     
     </div>
    </>
  )
}

