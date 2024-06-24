import { Button } from "@material-tailwind/react";
import { Image, ImageOriginal } from "../../utils/api-config";
import { Link } from "react-router-dom";
import Animation from "../global-components/animation";


const MovieShows = ({movie}) =>{

    const bgImg = ImageOriginal(movie.backdrop_path || movie.poster_path);
    const coverImg = Image(movie.poster_path || movie.backdrop_path);

    return(
        
        <div className="relative h-full w-full">
            <img src={bgImg} alt="image" className="h-full w-full object-cover"/>
            <div className="w-full h-full z-20 absolute bottom-0 left-0 bg-[#0000009f]"></div>
            <div className="container w-full h-full z-30 absolute bottom-0 left-0 flex justify-center items-center">
                
                <Animation duration={"1"} animate={"y"} className="w-full flex tablet:justify-center items-center gap-10">

                    <div className="flex flex-col gap-6 w-full tablet:w-[60%] laptop:w-[40%] text-primaryColor">
                        <h1 className="text-7xl font-extrabold">{movie.title || movie.name}</h1>
                        <p className="font-simibold">{movie.overview}</p>
                        <Link to={`/movie/${movie.id}`}>
                            <Button className="w-fit bg-main text-white text-md">WATCH NOW</Button>
                        </Link> 
                    </div>

                    <div className="hidden tablet:block group w-96 h-[600px]">
                        <img src={coverImg} alt="image" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all"/>
                    </div>

                </Animation>

            </div>
        </div>
    )
}

export default MovieShows;