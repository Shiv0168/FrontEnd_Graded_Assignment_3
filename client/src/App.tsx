import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import { MoviesComingList } from './movieList/MoviesComingList';
import { MoviesInTheatersList } from './movieList/MoviesInTheatersList';
import { TopRatedIndiaList } from './movieList/TopRatedIndiaList';
import { TopRatedMoviesList } from './movieList/TopRatedMoviesList';
import { NavigationBar } from './components/NavigationBar';
import { MoviesComingDetails } from './movieDetailsPage/MoviesComingDetails';
import { MoviesInTheatersDetails } from './movieDetailsPage/MoviesInTheatersDetails';
import { TopRatedIndiaDetails } from './movieDetailsPage/TopRatedIndiaDetails';
import { TopRatedMoviesDetails } from './movieDetailsPage/TopRatedMoviesDetails';


 const App = () => {
  return (
    <div>
        <BrowserRouter>
        <NavigationBar/>
                  <Routes>
                      <Route path='/movies-coming' element={<MoviesComingList/>}/>
                      <Route path='/movies-in-theaters' element={<MoviesInTheatersList/>}/>
                      <Route path='/top-rated-india' element={<TopRatedIndiaList/>}/>
                      <Route path='/top-rated-movies' element={<TopRatedMoviesList/>}/>
                      <Route path='/movies-coming/:id' element={<MoviesComingDetails/>}/>
                      <Route path='/movies-in-theaters/:id' element={<MoviesInTheatersDetails/>}/>
                      <Route path='/top-rated-india/:id' element={<TopRatedIndiaDetails/>}/>
                      <Route path='/top-rated-movies/:id' element={<TopRatedMoviesDetails/>}/>
                  </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App;

