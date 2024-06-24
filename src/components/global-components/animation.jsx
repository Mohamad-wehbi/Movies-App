import {motion, useInView, useAnimation} from "framer-motion"
import { useEffect, useRef } from "react";

const Animation = ({children, duration, animate, className}) => {

    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();

    const variants = {hidden:{opacity: 0, [animate]: 100}, visible:{opacity: 1, [animate]: 0}};
    const transition = {duration, delay: 0.25};

    useEffect(()=> { if(isInView) mainControls.start("visible")}, [isInView])

    return(
       
            <motion.div
                ref={ref}
                variants={variants} 
                initial="hidden" 
                animate={mainControls} 
                transition={transition} 
                className={className}>
                {children}
            </motion.div>
         
    )
}

export default Animation;