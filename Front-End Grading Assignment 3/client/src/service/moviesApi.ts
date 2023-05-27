import axios from 'axios'
import IMovies from '../model/IMovies'

export const moviesComingSoonData  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming`);
    return response.data
}

export const moviesInTheatersData  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters`);
    return response.data
}

export const topRatedIndianData  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india`);
    return response.data
}

export const topRatedMoviesData  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies`);
    return response.data
}

export const favouriteMoviesData  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/favourite`);
    return response.data
}