import { motion } from "framer-motion";
import { useState } from "react";


import { IoCloseCircle } from "react-icons/io5";
import { BsExclamation } from "react-icons/bs";

const WarningNotice = ({open,setOpen}) => {
    const [hovering,setHovering] = useState(false);

    return (
        <motion.div className="w-full h-screen left-0 bg-glass-gray absolute
        grid place-items-center"

        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >

            <div className="w-4/6 h-4/6 rounded-md flex items-center justify-center bg-red-400"
            >

                <div className="w-5/6 h-5/6  rounded-md flex flex-col bg-[#20202055]"
                >
                    <div className="w-full h-[8%] flex items-center  mx-[2%]"
                    >
                        <div className="cursor-pointer"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                            <IoCloseCircle 
                            size={30}
                            color="white"
                            />
                        </div>
                    </div>

                    <div className="flex-1 grid place-items-center"
                    >

                        <div className="w-5/6 h-5/6 flex"
                        >

                            <div className="flex-1 flex flex-col items-center relative"
                            >   
                                <div className="h-1/2 "
                                >
                                    <BsExclamation 
                                    size={250}
                                    color="white"
                                    />
                                </div>
                                <div className="text-white text-6xl font-primary"
                                >
                                    Warning!
                                </div>
                            </div>
                            <div className="w-10 h-full"
                            >
                                <div className="w-1 h-[90%] bg-white rounded-full" 
                                />
                            </div>
                            <div className="flex-1 grid place-items-center"
                            >

                                <div className="h-5/6 w-full"
                                >
                                    <div className="text-white text-2xl font-primary"
                                    >
                                        This site is heavily under construction and is simply to be show as a 
                                        <span className="font-bold"> Demo</span>.
                                        <br />
                                        <br />
                                        The construction of this site is a rebuild of the original site I developed.
                                        <br />
                                        <br />
                                        Wanna check out the original website?

                                    </div>
                                    <div className="my-5"
                                    > 
                                        <motion.div className="w-[130px] h-12 rounded-md border grid place-items-center border-white
                                        cursor-pointer"
                                        initial={{backgroundColor:'#ffffff00'}}
                                        animate={{
                                            backgroundColor:hovering? '#ffffffff':'#ffffff00'
                                        }}

                                        onMouseEnter={() => {setHovering(true)}}
                                        onMouseLeave={() => {setHovering(false)}}

                                        onClick={() => {
                                            location.href = 'https://www.cutthroatcountryclub.com/'
                                        }}
                                        >   
                                            <motion.div className=" text-3xl font-primary"
                                            initial={{color:'#ffffff'}}
                                            animate={{
                                                color: hovering? '#555555':'#ffffff'
                                            }}
                                            >
                                                View
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>

        </motion.div>
    );
}
 
export default WarningNotice;