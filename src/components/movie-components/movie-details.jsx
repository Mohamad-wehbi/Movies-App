import { getMovie } from "../../state/actions/movie-action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ImageOriginal } from "../../utils/api-config";
import MovieVideo from "./movie-video";
import Animation from "../global-components/animation";

const MovieDetails = ({movieId}) =>{

    const dispatch = useDispatch();
    const { movie } = useSelector(state => state.movie)
    
    useEffect(()=>{dispatch(getMovie(movieId))}, [movieId]);

    const coverImg = ImageOriginal(movie.poster_path || movie.backdrop_path);

    return(

            <div className="container w-full h-full z-30 absolute bottom-0 left-0 flex justify-center items-center">
                <Animation duration={"1"} animate={"x"} className="w-full flex justify-center items-center gap-10">
                    <div className="flex flex-col gap-6 w-full tablet:w-[60%] laptop:w-[40%] text-primaryColor">
                        <h1 className="text-7xl font-extrabold">{movie.title || movie.name}</h1>
                        <p className="font-simibold">{movie.overview}</p>
                        <MovieVideo movieId={movieId}/>
                    </div>
                    <div className="hidden tablet:block group w-96 h-[600px]">
                        <img src={coverImg} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all"/>
                    </div>
                </Animation>
            </div>

    )
}

export default MovieDetails;