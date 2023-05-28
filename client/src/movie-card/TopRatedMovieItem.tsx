import { Button, Card } from 'react-bootstrap'
import image from '../1.jpg'
import { Link } from 'react-router-dom'

type Props = {
  id : number ,
title : string ,
imgUrl : string
}

export const TopRatedMovieItem = ({id , title , imgUrl } : Props ) => {

  return (
    <>
        <Card>
             <Card.Img variant="top" src={imgUrl?imgUrl:image} alt={title} style={{height:"40vh"}}/>
             <Card.Body>
               <Card.Title>{title}</Card.Title>
               <a href="./" className='btn btn-light btn-sm' style={{cursor:"pointer"}}>Add to favourite &#9829;</a>
               <Link to={`/top-rated-movies/${id}`} style={{textDecoration:"none", color:"white"}} ><Button variant="primary" size='sm'>Show more..</Button></Link>
             </Card.Body>
        </Card>
    </>
  )
}
