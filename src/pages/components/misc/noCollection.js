


import { motion } from 'framer-motion';
import { useState } from 'react';

import {HiMiniBeaker} from 'react-icons/hi2';
import {FaArrowRight} from 'react-icons/fa6';



const NoCollection = () => {

    const [labHover,setLabHover] = useState(false);


    return(
        <div className="w-4/6 h-4/6 flex flex-col justify-center items-center rounded-md px-10
        bg-[#00000055] text-white"
        >   

            <div className="text-4xl text-purple font-primary
            mb-10 mr-auto"
            >
                No CCC Tokens Found...
            </div>

            <div className="text-2xl font-primary"
            >
                It doesn't appear that you are a members yet.
                <br />
                <br />
                If you're interested in joining the CCC, go on ahead to the Treasury to get started.
            </div>

            <div className="w-32 h-12 rounded-md p-[2px] mt-8 mr-auto gradient-1"
            >
                <div className="w-full h-full rounded-md flex items-center bg-gray cursor-pointer"
                onMouseEnter={() => {setLabHover(true)}}
                onMouseLeave={() => {setLabHover(false)}}
                >   
                    <div className="mx-3"
                    >
                        <HiMiniBeaker
                        size={30}
                        color='white'
                        />
                    </div>
                    
                    <motion.div className="ml-5"
                    initial={{translateX:0}}
                    animate={{
                        translateX: labHover? 10:0
                    }}
                    >
                        <FaArrowRight 
                        size={30}
                        color='white'
                        />
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
 



export default NoCollection;