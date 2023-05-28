import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NavigationBar } from './components/NavigationBar';
import './App.css'
import { MoviesComingList } from './movieList/MoviesComingList';
import { MoviesComingDetails } from './movieDetailsPage/MoviesComingDetails';
import { MoviesInTheatersList } from './movieList/MoviesInTheatersList';
import { TopRatedIndiaList } from './movieList/TopRatedIndiaList';
import { TopRatedMoviesList } from './movieList/TopRatedMoviesList';
import { FavouriteList } from './movieList/FavouriteList';
import { TopRatedMoviesDetails } from './movieDetailsPage/TopRatedMoviesDetails';
import { FavouriteDetails } from './movieDetailsPage/FavouriteDetails';
import { TopRatedIndiaDetails } from './movieDetailsPage/TopRatedIndiaDetails';
import { MoviesInTheatersDetails } from './movieDetailsPage/MoviesInTheatersDetails';

 const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
              <NavigationBar/>
              <Container>
                  <Routes>
                      <Route path='/movies-coming' element={<MoviesComingList/>}/>
                      <Route path='/movies-in-theaters' element={<MoviesInTheatersList/>}/>
                      <Route path='/top-rated-india' element={<TopRatedIndiaList/>}/>
                      <Route path='/top-rated-movies' element={<TopRatedMoviesList/>}/>
                      <Route path='/:favourite' element={<FavouriteList/>}/>

                      <Route path='/movies-coming/:id' element={<MoviesComingDetails/>}/>
                      <Route path='/top-rated-movies/:id' element={<TopRatedMoviesDetails/>}/>
                      <Route path='/movies-in-theaters/:id' element={<MoviesInTheatersDetails/>}/>
                      <Route path='/top-rated-india/:id' element={<TopRatedIndiaDetails/>}/>
                      <Route path='/favourite/:id' element={<FavouriteDetails/>}/>

                  </Routes>
              </Container>
          </BrowserRouter>
    </div>
  )
}

export default App;

