import { Badge, Col, Container, Row } from "react-bootstrap";
import { Rating } from "./Rating";


type Props = {
}

const movie = {
 "id": "1",
"title": "Game Night",
"year": "2018",
"genres": [
  "Action",
  "Comedy",
  "Crime"
],
"ratings": [
  2,
  10,
  1,
  10,
  6,
  2,
  5,
  2,
  9,
  7,
  5,
  3,
  7,
  7,
  1,
  4,
  5,
  9,
  2,
  8,
  10,
  8,
  1,
  10,
  7,
  10,
  8,
  6,
  7,
  6
],
"poster": "MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg",
"contentRating": "11",
"duration": "PT100M",
"releaseDate": "2018-02-28",
"averageRating": 0,
"originalTitle": "",
"storyline": "A group of friends who meet regularly for game nights find themselves trying to solve a murder mystery.",
"actors": [
  "Rachel McAdams",
  "Jesse Plemons",
  "Jason Bateman"
],
"imdbRating": "7.8",
"posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg"

}
export const MovieDetails = (props:Props) => {
  
   const {imdbRating , genres , posterurl , title , year , ratings , actors , releaseDate , duration , storyline} = movie;
  return (
    <Container style={{paddingTop:"10vh"}}>
      <Row>
        <Col xs={12} md={4}><img src={posterurl} alt={title}/></Col>
        <Col xs={12} md={8}>
            <Col><h1>{title}  {year}</h1></Col>
            <Row><Col>{storyline}</Col></Row>
            <Col>IMDB-rating <Rating rating={+imdbRating}/></Col>
            <Col>{genres.map((genres,idx)=>(<Badge bg="primary" className="me-2 my-2" key={idx}>{genres}</Badge>))}</Col>
            <Col><h3>{actors.map((actors,idx)=>(<Badge bg="success" className="me-2 my-2" key={idx}>{actors}</Badge>))}</h3></Col>
            <Col>release date <h3>{releaseDate}</h3></Col>
            <Col>Duration - {duration}</Col>
            <Col>release-date  {releaseDate}</Col>
            <br />
            <Row>
            {ratings.map((rating,idx)=>(
            <Col key={idx} lg={3} sm={1} md={2}>
             <Rating rating={rating}/>
            </Col>
            ))
            }
            </Row>
        </Col> 
      </Row>
    </Container>
  )
}
