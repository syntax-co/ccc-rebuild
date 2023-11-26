import { motion } from "framer-motion";



const Button1 = ({_label,_onClick,style}) => {
    return (
        <div className='w-28 h-10 p-[1px] flex items-center justify-center  rounded-lg 
        text-white text-xl cursor-pointer gradient-1
        '
        style={{
            ...style
        }}

        onClick={_onClick? _onClick:null}
        >
            <motion.div className='w-full h-full rounded-lg bg-gray flex items-center justify-center'
            initial={{backgroundColor:'#252525'}}
            whileHover={{backgroundColor:'#4AE6FF55'}}
            >
                {_label}
            </motion.div>
        </div>
    );
}
 
export default Button1;