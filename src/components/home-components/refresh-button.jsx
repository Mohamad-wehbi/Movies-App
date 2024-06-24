import { useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { getMovies } from "../../state/actions/movie-action";

const RefreshButton = ({lang}) => {

    const dispatch = useDispatch();
    const refresh = () => { dispatch(getMovies({lang, page:"1"})) }
    
    return(
    
        <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl font-bold text-primaryColor my-2">Random Moviea:</h2>
            <Button onClick={refresh} className="hidden tablet:block bg-main text-sm font-extrabold">Refresh Movies</Button>
        </div>
       
    )
}

export default RefreshButton;