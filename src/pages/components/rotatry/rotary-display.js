import { motion } from "framer-motion";
import { useEffect, useState } from "react";




const Rotar = ({
    value,
    valueOptions,
    name
}) => {

    
    const rotaryName = name? name:'';



    return (
        <div className="h-12 w-9 rounded-lg flex flex-col items-center justify-center overflow-scroll 
        hide-scrollbar m-1 font-primary text-white text-xl border border-purple relative
        "
        >
            <div className="relative "
            >
                <motion.div className="w-full h-8 flex flex-col items-center 
                relative
                "
                initial={{top:0}}
                animate={{
                    top:`-${28*value}px`
                }}
                >
                    
                {
                    valueOptions.map((item,dex) => {
                        
                        return(
                            <div key={dex} id={`${rotaryName}-${dex}`}
                            className="h-full flex items-center justify-center"
                            >
                                {item}
                            </div>
                        )
                    })
                }
                </motion.div>
            </div>


            <div className="w-full h-full absolute"
            >

            </div>

        </div>
    );
}


const RotaryDisplay = ({display,valueOptions}) => {
    return (
        <div className="flex my-0"
            >
            <Rotar 
            value={display[0]}
            valueOptions={valueOptions}
            name={'rotary-1'}
            />
            <Rotar 
            value={display[1]}
            valueOptions={valueOptions}
            name={'rotary-2'}
            />
            <div className="h-full flex items-end text-white text-3xl"
            >
            ,
            </div>
            <Rotar 
            value={display[2]}
            valueOptions={valueOptions}
            name={'rotary-3'}
            />
            <Rotar 
            value={display[3]}
            valueOptions={valueOptions}
            name={'rotary-4'}
            />
            <Rotar 
            value={display[4]}
            valueOptions={valueOptions}
            name={'rotary-5'}
            />
        </div>
    );
}
 


 
export default RotaryDisplay;