import { Button } from "@material-tailwind/react";
import { SiYoutubemusic } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {

    return(

    <header className=" pt-2 w-full z-50 h-[5rem] absolute top-0 left-0" >
        <div className="container h-full">
            <div className="h-full flex justify-between items-center rounded-xl">

                <div className="flex gap-2 items-center h-full">
                    <SiYoutubemusic  className="text-3xl text-main animate-bounce"/>
                    <h1 className="text-xl tablet:text-2xl font-bold text-primaryColor">Movies App</h1>
                </div>
                
                <div className="flex justify-center items-center gap-x-12 h-full">
                    <Button variant="text">
                        <Link to="/" className="text-xl font-simibold text-primaryColor">Home</Link>
                    </Button>
                    <Button variant="text">
                        <a target="_blank" href="https://developer.themoviedb.org/reference" className="text-xl font-simibold text-primaryColor">Docs API</a>
                    </Button>
                </div>

            </div> 
        </div>        
    </header>
    
    )
}

export default Header;