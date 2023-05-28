import axios from 'axios'
import IMovies from '../model/IMovies'



export const MovieComingDetailsFetch  = async (id? : number) =>{
    const response = await axios.get<IMovies>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming/${ id ? id : 1 }`);
    return response.data
}

export const MoviesInTheatersDetailsFetch  = async (id? : number) =>{
    const response = await axios.get<IMovies>(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters/${ id ? id : 96 }`);
    return response.data
}

export const TopRatedIndiaDetailsFetch  = async (id? : number) =>{
    const response = await axios.get<IMovies>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india/${ id ? id : 121 }`);
    return response.data
}

export const TopRatedMoviesDetailsFetch  = async (id? : number) =>{
    // const response = await axios.get<IMovies>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies/${ id ? id : 370 }`);
    const response = await axios.get<IMovies>(`http://localhost:3002/top-rated-movies/${ id ? id : 370 }`);
    return response.data
}

export const FavouriteMoviesDetailsFetch  = async (id? : number) =>{
    const response = await axios.get<IMovies>(`${process.env.REACT_APP_API_BASE_URL}/favourite/${ id ? id : 2 }`);
    return response.data
}