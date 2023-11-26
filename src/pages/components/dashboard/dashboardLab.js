import { motion } from "framer-motion";


const DashboardLab = () => {

    const delayVar = .5
    return (
        <motion.div key='dashLab' className="w-full h-full bg-cyan-600"
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

        </motion.div>
    );
}
 
export default DashboardLab;
