import { motion } from "framer-motion";



const NowThen = ({loreState,setLoreState,currentLore,setLore}) => {
    console.log(currentLore);
    return (
        <motion.div className="w-full flex-1 text-white overflow-hidden"
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{
                delay:.5
            }
        }}
        >
            {/* toggles */}
            <div className="w-full h-1/6 flex items-end justify-center"
            >
            <div className="w-5/6 h-fit flex justify-center"
            >

                <motion.div className="w-1/3 h-16  rounded-md
                mx-5 text-4xl font-display flex items-center justify-center cursor-pointer"
                style={{background:'linear-gradient(-135deg, #000000, #222222)'}}
                initial={{
                border:loreState? '1px solid #E94AFF':'1px solid #4AE6FF'
                }}
                animate={{
                border:loreState? '1px solid #E94AFF':'1px solid #4AE6FF'
                }}

                onClick={() => {
                setLoreState(true)
                setLore();
                }}
                >
                Now
                </motion.div>
                <motion.div className="w-1/3 h-16  rounded-md
                mx-5 text-4xl font-display flex items-center justify-center cursor-pointer"
                style={{background:'linear-gradient(-135deg, #111111, #222222)'}}
                initial={{
                border:!loreState? '1px solid #E94AFF':'1px solid #4AE6FF'
                }}
                animate={{
                border:!loreState? '1px solid #E94AFF':'1px solid #4AE6FF'
                }}

                onClick={() => {
                setLoreState(false);
                setLore();
                }}
                >
                Then
                </motion.div>

            </div>
            </div>

            <div className="w-full h-4/5 flex items-center justify-center "
            initial={{opacity:0}}
            animate={{
            opacity:1
            }}
            exit={{opacity:0}}
            >
            <div className="w-9/12 h-[90%] font-primary text-xl" 
            >
                {
                    currentLore &&
                    currentLore.map((item,dex) => { 

                        return(
                        <div key={'lore-text-'+dex} >
                            {item}
                        </div>
                        )
                    })
                }
            </div>
            </div>
            
            
            

        </motion.div>
    );
}
 
export default NowThen;