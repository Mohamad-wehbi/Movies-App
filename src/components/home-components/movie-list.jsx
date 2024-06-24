import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMovies } from "../../state/actions/movie-action";
import MovieCard from "./movie-card";
import MovieTabs from "./tab";
import Animation from "../global-components/animation";

const MovieList = ({page, lang, setLang}) => {

    const { movies } = useSelector(state => state.movie)
    const dispatch = useDispatch();

    useEffect(()=>{dispatch(getMovies({lang, page:page.toString()}))}, [lang, page]);

    const renderMovies = () => movies.map((movie,i)=> <MovieCard movie={movie} key={i} />)

    return(

        <MovieTabs setLang={setLang}>
            <Animation duration={"0.5"} animate={"y"} className="flex justify-center flex-wrap gap-y-12 gap-x-5 my-10">
                {renderMovies()}
            </Animation>                 
        </MovieTabs>
                
    )
}

export default MovieList;