import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "../components/Rating";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IMovies from "../model/IMovies";
import { LoadingStatus } from "../components/LoadingStatus";
import image from '../1.jpg'
import { MovieComingDetailsFetch, TopRatedIndiaDetailsFetch, TopRatedMoviesDetailsFetch } from "../service/MoviesDetailsApiFetch";

export const TopRatedIndiaDetails = () => {

  const [movieDetail, setMovieDetail] = useState<IMovies>()
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams()

  useEffect(() => {
    getData()
    window.scrollTo(0,0)
}, [])

const getData = () => {
  const fetchData = async()=>{
  const response = await TopRatedIndiaDetailsFetch(+(id?id:"121"))
  setMovieDetail(response)
  setLoading(false)
  }
  fetchData();
}
  const {title , year , storyline , imdbRating  , releaseDate , duration } = movieDetail as IMovies || {}

  return (
    <>
       <Container style={{paddingTop:"10vh"}}>
        {loading&&<LoadingStatus/>}
          <Row>
                <Col xs={12} md={4}><img src={movieDetail?.posterurl?movieDetail.posterurl:image} alt={title}/></Col>
                <Col xs={12} md={8}>
                <Col><h1>{title?title:""}  {year}</h1></Col>
                <br />
                <Row><Col>{storyline}</Col></Row>
                <br />
                <Col>IMDB-rating <Rating rating={+imdbRating}/></Col>
                <br />
                <Col>release date <h3>{releaseDate}</h3></Col>
                <br />
                <Col>{duration}  Playtime in minutes</Col>
                <br />
                <Col>release-date   {releaseDate}</Col>
                <br />
            </Col> 
          </Row>
       </Container> 
    </>
  )
}

