import MoviesCarousel from "../global-components/carousel";
import MovieShows from "../home-components/movie-shows";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFamousMovies } from "../../state/actions/movie-action";

const FamousMovies = () => {

    const { famousMovies } = useSelector(state => state.movie)
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(getFamousMovies())}, []);
    
    const renderFamousMovies = () => famousMovies.map((movie,i)=> <MovieShows movie={movie} key={i} />)

    return(

        <MoviesCarousel>
            {renderFamousMovies()}
        </MoviesCarousel>               
    )
}

export default FamousMovies;