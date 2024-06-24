import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieVideos } from "../../state/actions/movie-action";
import { useEffect } from "react";
import { Video } from "../../utils/api-config";

const MovieVideo = ({movieId}) =>{

    const dispatch = useDispatch();
    const { movieVideos } = useSelector(state => state.movie)

    useEffect(()=>{dispatch(getMovieVideos(movieId))}, [movieId]);

    const playVideo = () => {location.href = Video(movieVideos[0].key)}
    console.log(movieVideos)

    return <Button onClick={playVideo} className="w-fit bg-main text-white text-md">Play Now</Button>

}
    
export default MovieVideo;