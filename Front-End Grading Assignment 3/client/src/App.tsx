import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NavigationBar } from './components/NavigationBar';
import { MoviesIntheaters } from './components/MovieCategories/MoviesInTheaters';
import { MoviesComingSoon } from './components/MovieCategories/MoviesComingSoon';
import { TopRatedMovies } from './components/MovieCategories/TopRatedMovies';
import { TopratedIndian } from './components/MovieCategories/TopRatedIndian';
import { FavourtiesMovies } from './components/MovieCategories/FavourtiesMovies';

 const App = () => {
  return (
    <>
      <NavigationBar/>
        <Container>
            <Routes>
                <Route path='/movies-in-theaters' element={<MoviesIntheaters/>}/>
                <Route path='/movies-coming' element={<MoviesComingSoon/>}/>
                <Route path='/top-rated-india' element={<TopratedIndian/>}/>
                <Route path='/top-rated-movies' element={<TopRatedMovies/>}/>
                <Route path='/favourite' element={<FavourtiesMovies/>}/>
            </Routes>
        </Container>
    </>
  )
}

export default App;