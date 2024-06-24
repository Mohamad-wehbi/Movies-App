import Header from "../components/global-components/header";
import { useState } from "react";
import MovieList from "../components/home-components/movie-list";
import RefreshButton from "../components/home-components/refresh-button";
import Pagination from "../components/home-components/pagination";
import FamousMovies from "../components/home-components/famous-movies";

const HomePage = () => {
    
    const [lang, setLang] = useState("en-US");
    const [page, setPage] = useState(1);
 
    return(
       <>
       
       <Header/>

       <section className="py-2 h-screen relative mb-10">

            <FamousMovies/>

        </section>

        <section className="container mb-10">

            <RefreshButton lang={lang}/>
            <MovieList page={page} lang={lang} setLang={setLang}/>
            <Pagination page={page} setPage={setPage}/>  

        </section>   

       </>      
    )
}

export default HomePage;