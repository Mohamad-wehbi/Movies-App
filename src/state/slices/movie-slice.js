import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
   name: "movie",
   initialState: {
    movies: [],
    famousMovies:[],
    movieImages:[],
    movieVideos:[],
    movie: {},
    pagination: {},
    loadingMovies: false,
    loadingMovie: false,
   },
   
   reducers: {

      setMovies(state, action){
        state.movies = action.payload.results;
      },

      setMoviesImages(state, action){
        state.movieImages = action.payload.backdrops.slice(0,20);
      },

      setMoviesVideos(state, action){
        state.movieVideos = action.payload.results.slice(0,1);
      },

      setFamousMovies(state, action){
        state.famousMovies = action.payload.results.slice(0,20);
      },

      setPagination(state, action){
        state.pagination.page = action.payload.page;
        state.pagination.pagesCount = action.payload.total_pages;
      },

      setMovie(state, action){
        state.movie = action.payload;
      },

      startLoadingMovies(state){ 
        state.loadingMovies = true
      },

      endLoadingMovies(state){ 
        state.loadingMovies = false 
      },
   }
});

const movieReducer = movieSlice.reducer;
const movieActions = movieSlice.actions;

export { movieActions, movieReducer }