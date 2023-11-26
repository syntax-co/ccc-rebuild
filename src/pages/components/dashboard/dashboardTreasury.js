import { motion } from "framer-motion";
import BorderGrad from "../misc/borderGrad";
import StonksGraph from "./stonksGraph";
import { useEffect, useState } from "react";

import { TfiViewListAlt } from "react-icons/tfi";
import { AiOutlineSwap } from "react-icons/ai";

// ████████╗██╗██╗     ███████╗
// ╚══██╔══╝██║██║     ██╔════╝
//    ██║   ██║██║     █████╗  
//    ██║   ██║██║     ██╔══╝  
//    ██║   ██║███████╗███████╗
//    ╚═╝   ╚═╝╚══════╝╚══════╝
                            
const TransactionTile = () => {

    const [hovering,setHovering] = useState(false);

    return(
        <div className="w-full h-16  mb-2 text-white text-sm font-primary"
        >
            <div className="w-[95%] h-full mx-auto flex"
            >
                
                
                
                <div className="mr-2"
                >
                <BorderGrad />
                </div>

                <motion.div className="flex-1 flex rounded-md py-1 px-3 cursor-pointer"
                initial={{backgroundColor:'#aaaaaa55'}}
                whileHover={{backgroundColor:'#4AE6FF55'}}
                transition={{
                    duration:.5
                }}
                >
                    <div className="flex-1 "
                    >  

                        <div className="h-1/2 flex items-center"
                        >
                            <span className="mr-1 font-bold" 
                            >Date: </span>
                            {
                                ' 3/25/23 13:10'
                            }
                        </div>

                        <div className="h-1/2 flex items-center"
                        >   
                            <span className="mr-1 font-bold" 
                            >
                                To:
                            </span>
                            {
                                ' 0Xn3MY1tjSsnSci4UJ...'
                            }
                        </div>

                    </div>

                    <div className="w-24 h-full grid place-items-center"
                    >
                        <div className="text-xl"
                        >   
                            
                            0.0
                        </div>
                    </div>

                    <div className="w-fit h-full grid place-items-center"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-400"
                        >

                        </div>
                    </div>
                    
                </motion.div>
            </div>


            
        </div>
    )
}



// ███╗   ███╗ █████╗ ██╗███╗   ██╗
// ████╗ ████║██╔══██╗██║████╗  ██║
// ██╔████╔██║███████║██║██╔██╗ ██║
// ██║╚██╔╝██║██╔══██║██║██║╚██╗██║
// ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝
                                
const DashboardTreasury = () => {
    
    const [prevTransactions,setPrevTransactions] = useState([]);

    const getPrevTransactions = () => {
        const finalResults = [];

        for (var i=0; i<6; i++) {

            finalResults.push(
                <TransactionTile key={i}
                
                />
            )
            
        }

        setPrevTransactions(finalResults);

    }

    useEffect(() => {
        getPrevTransactions()
    }, []);

    const delayVar = .5
    return (
        <motion.div key='dashTreasury' 
        className="w-full h-full flex flex-col"
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
        >
            
            <div className="w-full h-20 border-b border-white
            flex items-center "
            >
                <div className="ml-10 text-5xl text-white font-display"
                >
                    Treasury
                </div>
            </div>


            {/* main-grid */}
            <div className='flex-1 p-10 grid grid-rows-6 grid-cols-8'
            >

                {/* panel-1 */}
                <div className="row-start-3 row-span-4 col-span-5 grid place-items-center 
                px-5 py-3"
                >
                    <div className='w-full h-full flex flex-col'
                    >
                        <div className="h-16 flex items-center pl-10 
                        text-white text-2xl font-primary"
                        >
                            $STONK
                        </div>
                        
                        <div className="flex-1"
                        >
                        <BorderGrad 
                        innerClass={'flex flex-col '}
                        >
                            
                            <div className="flex-1 grid place-items-center  px-10 "
                            >
                                <div className="w-5/6 h-5/6 flex flex-col"
                                >   
                                    <div className=" mb-2 pl-5 text-white text-3xl font-primary"
                                    >
                                        $ 20.25
                                    </div>
                                    
                                    <div className="flex-1"
                                    >
                                        <StonksGraph dataSample={1} />
                                    </div>
                                </div>


                            </div>
                        </BorderGrad>
                        </div>
                    </div>
                </div>

                {/* panel-2 */}
                <div className="row-start-1 row-span-2 col-span-2 grid place-items-center 
                px-5 py-3"
                >   
                    
                    <div className="w-full h-full flex flex-col  "
                    >
                        <div className="h-12 flex items-center pl-10 
                        text-white text-2xl font-primary"
                        >
                            Balance
                        </div>

                        <div className="flex-1"
                        >
                            <BorderGrad 
                            innerClass={'p-5'}
                            >
                                <div className="w-full h-full flex flex-col"
                                >

                                    <div className="w-full h-1/3 px-3 flex items-center 
                                    rounded-md bg-[#55555555]  
                                    text-white font-primary"
                                    >
                                        <div className="flex-1 mr-2 text-xl"
                                        >
                                            $STNK
                                        </div>
                                        <div className="text-xl"
                                        >
                                            0.0
                                        </div>
                                    </div>

                                    <div className="w-full h-1/3 flex-1 flex flex-col justify-end rounded-md  text-white font-primary"
                                    >   
                                        <div className="w-full h-[2px] rounded-full bg-white"
                                        >
                                        </div>

                                        <div className="h-10 flex mt-2 px-3"
                                        >
                                            <div className="flex-1 mr-2 text-xl"
                                            >
                                                USDT
                                            </div>
                                            <div className="text-xl"
                                            >
                                                0.0
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </BorderGrad>
                        </div>
                    </div>
                </div>

                {/* panel-3 */}
                <div className="row-start-1 row-span-2 col-span-3 grid place-items-center 
                px-5 py-3"
                >   
                    
                    <div className="w-full h-full flex flex-col  "
                    >
                        <div className="h-12 flex items-center pl-10 
                        text-white text-2xl font-primary"
                        >
                            Bank
                        </div>

                        <div className="flex-1"
                        >
                            <BorderGrad 
                            innerClass={'p-5'}
                            >
                                <div className="w-full h-full flex items-center
                                text-white font-primary"
                                >

                                    

                                    <div className="w-3/5 h-full p-3 text-lg
                                    flex flex-col justify-center"
                                    >
                                        <div className="h-10 grid place-items-center"
                                        >   
                                            <div className="w-full h-full bg-[#55555555] rounded-full
                                            flex"
                                            >
                                                <div className="w-1/4 h-full rounded-full px-12 bg-glass-gray
                                                flex items-center justify-center text-white text-md font-primary"
                                                >
                                                    ETH
                                                </div>
                                                
                                                <div className="flex-1 px-2"
                                                >
                                                    <input className="w-full h-full text-xl"
                                                    type='number'
                                                    placeholder={0.0}
                                                    />
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        <div className="w-full h-1/3 flex-1 flex flex-col justify-end rounded-md  text-white font-primary"
                                        >   
                                            <div className="w-full h-[2px] rounded-full bg-white"
                                            >
                                            </div>

                                            <div className="h-10 flex mt-2 px-3"
                                            >
                                                <div className="flex-1 mr-2 text-xl"
                                                >
                                                    USDT
                                                </div>
                                                <div className="text-xl"
                                                >
                                                    0.0
                                                </div>
                                            </div>
                                        </div>
                                    

                                    </div>

                                    <div className="h-full w-2/5 grid place-items-center"
                                        >   
                                            <div className="w-[90%] h-full flex items-center"
                                            >
                                                
                                                <motion.div className="h-5/6 w-full  rounded-md cursor-pointer
                                                grid place-items-center px-4  text-white text-xl"
                                                initial={{backgroundColor:'#E94AFF55'}}
                                                whileHover={{backgroundColor:'#4AE6FF55'}}
                                                >
                                                    <AiOutlineSwap
                                                    size={20}
                                                    color='white'
                                                    />
                                                </motion.div>

                                            </div>
                                        </div>

                                </div>
                            </BorderGrad>
                        </div>
                    </div>
                </div>
                
                {/* panel-4 */}
                <div className="  col-start-6 col-span-3 row-span-6  
                px-5 py-3"
                >

                    <div className=' w-full h-full  flex flex-col'
                    >
                        <div className="h-12 flex items-center pl-10 
                        text-white text-2xl font-primary"
                        >
                            Portal
                        </div>

                        <div className="flex-1"
                        >
                        <BorderGrad 
                        innerClass='p-5'
                        >
                            
                            <div className="w-full h-full flex flex-col"
                            >
                                <div className="h-1/3 p-2 "
                                >
                                    
                                    <div className="w-full h-full flex flex-col "
                                    >
                                        <div className="w-full text-white px-5 text-2xl font-primary"
                                        >
                                            Transfer
                                        </div>
                                        <div className="flex-1 pt-3"
                                        >
                                            <div className="h-12 grid place-items-center"
                                            >   
                                                <div className="w-[90%] h-full bg-[#55555555] rounded-full
                                                flex"
                                                >
                                                    <div className="w-1/4 h-full rounded-full bg-glass-gray
                                                    flex items-center justify-center text-white text-xl font-primary"
                                                    >
                                                        $STNK
                                                    </div>
                                                    
                                                    <div className="flex-1 p-2"
                                                    >
                                                        <input className="w-full h-full text-xl"
                                                        type='text'
                                                        placeholder={0.0}
                                                        />
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                            <div className="h-12 grid place-items-center mt-2"
                                            >   
                                                <div className="w-[90%] h-full bg-[#55555555] rounded-full
                                                flex"
                                                >
                                                    <div className="w-1/4 h-full rounded-full bg-glass-gray
                                                    flex items-center justify-center text-white text-xl font-primary"
                                                    >
                                                        To
                                                    </div>
                                                    
                                                    <div className="flex-1 p-2"
                                                    >
                                                        <input className="w-full h-full text-xl"
                                                        type='text'
                                                        placeholder={'0X1qOcGbljCa...'}
                                                        />
                                                    </div>
                                                    
                                                </div>
                                            </div>


                                            <div className="h-10 grid place-items-center mt-2"
                                            >   
                                                <div className="w-[90%] h-full flex justify-end"
                                                >
                                                    
                                                    <motion.div className="h-full  rounded-full cursor-pointer
                                                    grid place-items-center px-4  text-white text-xl"
                                                    initial={{backgroundColor:'#E94AFF55'}}
                                                    whileHover={{backgroundColor:'#4AE6FF55'}}
                                                    >
                                                        Send
                                                    </motion.div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                </div>

                                <div className="h-2/3 flex flex-col rounded-md"
                                >
                                    <div className="h-12 px-5 flex items-center relative 
                                    text-white text-xl font-primary"
                                    >
                                        <div className="flex-1"
                                        >
                                            Previous Transactions
                                        </div>

                                        <div className="h-10 w-10 flex items-center justify-center
                                        cursor-pointer"
                                        >
                                            
                                            <TfiViewListAlt
                                            size={20}
                                            />
                                        </div>

                                    </div>

                                    <div className="flex-1 rounded-md pt-5 bg-glass-gray
                                    overflow-scroll hide-scrollbar"
                                    >
                                        {
                                            prevTransactions.map((item,dex) => {
                                                return(item)
                                            })
                                        }
                                    </div>
                                    
                                    
                                </div>

                            </div>

                        </BorderGrad>
                        </div>
                    </div>
                    
                </div>

            </div>


            
        </motion.div>
    );
}
 
export default DashboardTreasury;