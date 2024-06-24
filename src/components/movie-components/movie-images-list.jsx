import { useDispatch, useSelector } from "react-redux";
import { getMovieImages } from "../../state/actions/movie-action";
import { useEffect } from "react";
import MovieImage from "./movie-image";
import MoviesCarousel from "../global-components/carousel";

const MovieImagesList = ({movieId}) => {

    const dispatch = useDispatch();
    
    const { movieImages } = useSelector(state => state.movie)
    useEffect(()=>{dispatch(getMovieImages(movieId))}, [movieId]);

    const renderImages = () => movieImages.map((image, i)=> <MovieImage image={image} key={i}/>)

    return (

        <MoviesCarousel>
            {renderImages()}
        </MoviesCarousel> 
    )
}

export default MovieImagesList;