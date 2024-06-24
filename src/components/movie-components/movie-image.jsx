import { ImageOriginal } from "../../utils/api-config";

const MovieImage = ({image}) => {

    return(

        <>
            <img src={ImageOriginal(image.file_path)} className="h-full w-full object-cover"/>
            <div className="w-full h-full z-20 absolute bottom-0 left-0 bg-[#00000039]"></div>
        </>
    )
    
    
    
}

export default MovieImage;