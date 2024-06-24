import { IconButton } from "@material-tailwind/react"
import { FaYoutube } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { Image } from "../../utils/api-config"

const MovieCard = ({movie}) =>{

    const Img = Image(movie.poster_path || movie.backdrop_path);

    return(
        <div className="w-64 group relative hover:scale-105 transition-all">
                <div className="h-[400px] w-full" >
                    <img src={Img} className="h-full w-full object-cover rounded-2xl group-hover:blur-sm"/>
                    <div className="absolute left-0 rounded-full top-0 w-full h-full opacity-0 group-hover:opacity-100">
                        <div className="flex justify-center items-center h-full">
                            <Link to={`/movie/${movie.id}`}>
                                <IconButton variant="text">
                                    <FaYoutube className="text-main text-5xl group-hover:scale-150 transition-all"/>
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                </div>
                <h2 className="text-lg font-bold text-primaryColor my-2">{movie.title || movie.name}</h2>
            </div>
    )
}

export default MovieCard