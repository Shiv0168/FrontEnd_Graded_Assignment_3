import IMovies from '../model/IMovies'
import '../App.css'
import imgalt from '../1.jpg'
import { Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props ={
  movies : IMovies[] ,
  AddToFavourite : (movies:IMovies)=>void ,
  removeFromFavourite : (id:number)=>void,
  favouriteChecker : (id:number)=>boolean
}

export const TopRatedMoviesComponent = ({movies , AddToFavourite , favouriteChecker , removeFromFavourite}:Props) => {

  return (
    <>
      {
        movies.map((movies , index)=>(
          <Card style={{ width: '16rem' }} key={index} className='image-container d-flex justify-content-start m-3 movieCard'>
          <Link to={`/top-rated-movies/${movies.id}`} style={{textDecoration:"none", color:"white"}}><Card.Img variant="top" src={movies.posterurl?movies.posterurl:imgalt} alt={movies.title} className="CoverImage"/>
          </Link>  
            <div className='overlay d-flex align-items-center justify-content-center'>
            <div className="button">
            <Card.Title>{movies.title}</Card.Title>
              {
                favouriteChecker(movies.id)?(
                  <Button variant='outline-light' className='mr-2' onClick={()=>{removeFromFavourite(movies.id)}}>Remove from favourite</Button>
                ) : (
                  <Button variant='outline-info'className='mr-2' onClick={()=>{AddToFavourite(movies)}}>Add to favourite</Button>
                )
              }
            </div>
            </div>
          </Card>
        ))
      } 
    </>
  )
}

