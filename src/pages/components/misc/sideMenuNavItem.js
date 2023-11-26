import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import * as Baker from '../../tools/cookie-functions.js';



const NavItem = ({label,path,setOpen}) => {
    
    const [currentPage,setCurrentPage] = useState(false);
    const [hovering,setHovering] = useState(false);
    const router = useRouter();



    const checkPage = () => {
        const loc = window.location.href;
        const sep = loc.split('/');
        const actual = '/' + sep[sep.length-1]; 
        
        if (actual == path) {
            setCurrentPage(true);
        } else {
            setCurrentPage(false);
        }
    } 

    
    
    // router.events.on('routeChangeComplete',checkPage)

    return(
        <div className='nav-item gradient-1'
        
        

        onClick={(event) => {
            setOpen(false);

            setTimeout(() => {
                router.push(path);
            }, 500);
        }}
        >

            <div className="w-11/12 h-full mr-[2px] rounded-l-md bg-gray
            flex items-center relative"

            onMouseEnter={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            >
                <div className="ml-4"
                >
                    {label}
                </div>

                <motion.div className="w-full h-full rounded-r-md bg-trans-blue  rounded-sm absolute"
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:hovering? 1:0
                }}
                >

                </motion.div>
            </div>
            <div className="w-1/12 h-full rounded-r-md bg-gray
            flex items-center justify-center"
            >
                <motion.div className="w-full h-full rounded-r-md bg-trans-blue  rounded-sm"
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:hovering? 1:0
                }}
                >

                </motion.div>
            </div>

            
            
        </div>
    )
}


export default NavItem;