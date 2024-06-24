import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import HomePage from "./pages/home-page";
import MoviePage from "./pages/movie-page";

export const router = createBrowserRouter(createRoutesFromElements([
    <>
        <Route path="/" element={<HomePage/>}/>   
        <Route path="movie/:movieId" element={<MoviePage/>}/>
    </>  
]))