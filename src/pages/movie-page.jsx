import Header from "../components/global-components/header";
import MovieDetails from "../components/movie-components/movie-details";
import { useParams } from "react-router";
import MovieImagesList from "../components/movie-components/movie-images-list";

const MoviePage = () => {

    const { movieId } = useParams();

    return(

       <>

       <Header/>
       <section className="py-2 h-screen relative">
            <MovieImagesList movieId={movieId}/>
            <MovieDetails movieId={movieId}/>
        </section>

       </>       
    )
}

export default MoviePage;