import { error } from "../../utils/toast";
import { movieActions } from "../slices/movie-slice";
import * as ApiOptions from "../../utils/api-options";
// Movie actions

export const getMovies = (query) => async(dispatch) =>{
    try{
        dispatch(movieActions.startLoadingMovies());
        const  {data}  = await axios.request(ApiOptions.moviesOptions(query));
        dispatch(movieActions.setMovies(data));
        dispatch(movieActions.setPagination(data));
        dispatch(movieActions.endLoadingMovies());

    }catch(err) { error(err);  }
}

export const getFamousMovies = () => async(dispatch) =>{
    try{
        const  {data}  = await axios.request(ApiOptions.famousMoviesOptions());
        dispatch(movieActions.setFamousMovies(data));

    }catch(err) { error(err);  }
}

export const getMovie = (movieId) => async(dispatch) =>{
    try{
        const  {data}  = await axios.request(ApiOptions.movieDetailsOptions(movieId));
        dispatch(movieActions.setMovie(data));

    }catch(err) { error(err) }
}

export const getMovieImages = (movieId) => async(dispatch) =>{
    try{
        
        const  {data}  = await axios.request((ApiOptions.movieImgagesOptions(movieId)));
        dispatch(movieActions.setMoviesImages(data));
        
    }catch(err) { error(err) }
}

export const getMovieVideos = (movieId) => async(dispatch) =>{
    try{
        
        const  {data}  = await axios.request((ApiOptions.videosOptions(movieId)));
        dispatch(movieActions.setMoviesVideos(data));
        
    }catch(err) { error(err) }
}


import axios from 'axios';



