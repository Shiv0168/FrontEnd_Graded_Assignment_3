import { Card } from 'react-bootstrap'
import image from '../1.jpg'
import { MovieDetails } from './MovieDetails'

type Props = {
title : string ,
imgUrl : string ,
loading : boolean ;
}

export const MovieItem = ({ title , imgUrl , loading } : Props ) => {

  return (
    <>
        <Card>
             <Card.Img variant="top" src={imgUrl?imgUrl:image} alt={title} style={{height:"50vh"}}/>
             <Card.Body>
               <Card.Title>{title}</Card.Title>
               <a href="./" className='btn btn-light btn-sm' style={{cursor:"pointer"}}>Add to favourite &#9829;</a>
               <a href="./" className='btn btn-light btn-sm' onClick={()=>{<MovieDetails/>
               }} style={{cursor:"pointer"}} >View more ...</a>
               

             </Card.Body>
        </Card>
    </>
  )
}
