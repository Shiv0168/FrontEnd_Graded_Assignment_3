import { ChangeEvent, useEffect, useState } from 'react'
import { MovieComingComponent } from '../movie-card/MovieComingComponent'
import IMovies from '../model/IMovies'
import '../App.css';
import MovieListHeading from '../components/MovieListHeading'
import SearchBox from '../components/SearchBox'
import axios from 'axios';
import { LoadingStatus } from '../components/LoadingStatus';
import { Container, Row } from 'react-bootstrap';

export const MoviesComingList = () => {
    
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movieList, setMovieList] = useState<IMovies[]>([]);  
  const [favourite , setFavourite] = useState<IMovies[]>([]);
  const [Loading , setLoading] = useState<boolean>(true);
  const [ error, setError ] = useState<Error | null>( null );

  const fetchData = async(searchQuery:string)=>{
    try{
      const response = await axios.get(`http://localhost:3002/movies-coming?title_like=${searchQuery}`)
      setMovieList(response.data)
      setLoading(false)
    } catch (error){
      setError( error as Error);
    }
  }

  useEffect(()=>{
    fetchData("")
  },[])


  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('movie-app-favourites') as string);
    if (movieFavourites) {
      setFavourite(movieFavourites);
    }
  }, []);

      const saveToLocalStorage = (items:IMovies[]) => {
        localStorage.setItem('movie-app-favourites', JSON.stringify(items));
      };

  const AddToFavourite = (movie:IMovies) => {
    const oldFavourite = [...favourite];
    const newFavourite = oldFavourite.concat(movie);
    setFavourite(newFavourite);
    saveToLocalStorage(newFavourite)
    }

    let favouriteChecker = (id:number) =>{
      const boolean = favourite.some((movie) => movie.id === id)
      return boolean;
    }

    let removeFromFavourite = (id:number) => {
      const oldFavourite = [...favourite];
      const newFavourite = oldFavourite.filter((movie)=>movie.id !== id);
      setFavourite(newFavourite);
      saveToLocalStorage(newFavourite)
      }

  const onTextChange =(e:ChangeEvent<HTMLInputElement>)=>{
    setSearchQuery(e.target.value)
    fetchData(e.target.value)
  }

  return (
      <Container fluid className='movie-app' style={{marginTop:"10vh"}}>
        <Row>
        <div className='row d-flex align-item-center mt-2 mb-2'>
            <MovieListHeading heading="Movies Coming"/>
            <SearchBox searchQuery={searchQuery} onTextChange={onTextChange}/>
        </div>
        </Row>
        {
          !error && Loading?(
            <LoadingStatus/>
          ):(
            <div className='row'>
            <MovieComingComponent movies={movieList} AddToFavourite={AddToFavourite} removeFromFavourite={removeFromFavourite} favouriteChecker={favouriteChecker}/>
        </div>
          )
        }
        <hr />
        <div className='row d-flex align-item-center mt-2 mb-2'>
            <MovieListHeading heading="Favourite"/>
        </div>
        <div className='row'>
            <MovieComingComponent movies={favourite} AddToFavourite={AddToFavourite} removeFromFavourite={removeFromFavourite} favouriteChecker={favouriteChecker}/>
        </div>
      </Container>
  )
}
