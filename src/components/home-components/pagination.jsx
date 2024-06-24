import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { IconButton } from "@material-tailwind/react";

const Pagination = ({page, setPage}) => {

    const { pagination } = useSelector(state => state.movie)
    
    const incremented = () => {
        if(page < 100) setPage(page + 1);
        else {return} 
    }

    const decremented = () => {
        if(page > 1) setPage(page - 1);
        else {return} 
    }

    return(

        <div className="flex justify-center">
            <div className="flex justify-between items-end w-full tablet:w-96 gap-10">

                <IconButton onClick={decremented} variant="text" className="animate-bounce rounded-full">
                    <FaCircleArrowLeft className="text-5xl text-main"/>
                </IconButton>

                <p className="font-semibold text-primaryColor">{`Page ${pagination.page} of ${pagination.pagesCount}`}</p>

                <IconButton onClick={incremented} variant="text" className="animate-bounce rounded-full">
                    <FaCircleArrowRight className="text-5xl text-main"/>
                </IconButton>
                    
            </div>
        </div>
    )
}

export default Pagination;