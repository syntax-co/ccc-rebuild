
import { motion } from "framer-motion";
import NoCollection from "../misc/noCollection";
import StonksGraph from "./stonksGraph";





const DashboardMain = () => {
    const delayVar = .5

    return (
        <motion.div key='dashMain' 
        className="h-full w-full flex"
        initial={{
            opacity:0,
            transition:{
                delay:0
            }
        }}
        animate={{
            opacity:1,
            transition:{
                delay:delayVar,
                duration:delayVar
            }
        }}
        exit={{
            opacity:0,
            transition:{
                delay:0,
                duration:delayVar
            }
        }}
        // transition={{
        //     duration:2
        // }}
        >
            
            <div className="flex flex-col flex-1 "
            >

                <div className="w-full h-20 border-b border-white
                flex items-center"
                >
                    <div className="ml-10 text-5xl text-white font-display"
                    >
                        Dashboard
                    </div>
                </div>

                <div className=" flex flex-1 "
                >

                    <div className="w-1/2 h-full border-r border-white
                    flex items-center justify-center"
                    >

                        <div className="w-5/6 h-5/6 flex flex-col"
                        >
                            
                            <div className="text-white text-2xl mb-5 font-primary "
                            >
                                Balance
                            </div>

                            <div className="w-full h-20 gradient-1 rounded-md
                             p-[2px]"
                            >
                                <div className="w-full h-full rounded-md bg-gray px-8 py-3
                                flex items-center"
                                >
                                    

                                    <div className="w-10 h-10"
                                    style={{
                                        backgroundImage:'url(./images/coin-logo.png)',
                                        backgroundPosition:'center',
                                        backgroundSize:'contain'
                                    }}
                                    >
                                    </div>
                                    <div className="text-xl flex-1 text-white font-primary px-3"
                                    >
                                        $STONK
                                    </div>

                                    <div className="w-1/3 h-full border-l border-[#ffffff55]
                                    flex flex-col text-white font-primary pl-2"
                                    >
                                        
                                        <div className="flex flex-1 "
                                        >
                                            $STNK
                                            <div className="ml-auto"
                                            >
                                                0.0
                                            </div>
                                        </div>

                                        <div className="flex  flex-1 "
                                        >
                                            USDT
                                            <div className="ml-auto"
                                            >
                                                0.0
                                            </div>
                                        </div>
                                        
                                    </div>
                                    

                                </div>

                            </div>


                            <div className='flex-1 rounded-md gradient-1
                            p-[2px] mt-4'
                            >
                                <div className="w-full h-full rounded-md p-5 bg-gray
                                flex flex-col items-center"
                                >
                                    <div className="h-16 w-full flex px-10"
                                    >
                                        <div className="text-white text-4xl font-display"
                                        >
                                            $STONK Price
                                        </div>
                                    </div>

                                    <StonksGraph />

                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="w-1/2 h-full 
                    flex items-center justify-center"
                    >
                        <div className="w-5/6 h-5/6 flex flex-col"
                        >

                            <div className="text-white text-2xl mb-5 font-primary "
                            >
                                Collection
                            </div>

                            <div className=" flex-1 gradient-1 rounded-md p-[2px]"
                            >
                                <div className="w-full h-full rounded-md bg-gray
                                flex items-center justify-center"
                                >

                                    
                                    <NoCollection />

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                

                
            </div>
        </motion.div>
    );
}
 
export default DashboardMain;