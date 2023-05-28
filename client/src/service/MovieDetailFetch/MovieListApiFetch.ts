import axios from "axios";
import IMovies from "../../model/IMovies";

export const MoviesComingListFetch  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming`);
    return response.data
}

export const TopRatedMoviesListFetch  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies`);
    return response.data
}

export const MoviesInTheatersListFetch  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters`);
    return response.data
}

export const TopRatedIndiaListFetch  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india`);
    return response.data
}

export const FavouriteListFetch  = async () =>{
    const response = await axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/favourite`);
    return response.data
}