
import { motion } from "framer-motion";

import {HiMiniBeaker} from "react-icons/hi2";
import { ImCoinDollar } from "react-icons/im";
import { RiHome2Line } from "react-icons/ri";


const NavItem = ({icon,page,dex,onClick}) => {

    return(
        <motion.div className="w-14 h-14
        rounded-full my-2 p-[2px]"
        initial={{backgroundColor:'#ffffff'}}
        animate={{
            backgroundColor:page == dex? '#4AE6FF':'#ffffff'
        }}
        whileHover={{backgroundColor:'#4AE6FF'}}
        onClick={onClick? onClick:''}
        >
            <div className="w-full h-full flex items-center justify-center
            rounded-full bg-gray cursor-pointer"
            >
                {icon}
            </div>
        </motion.div>
    )
}


const DashboardNav = ({page,setPage}) => {
    return (
        <div className="w-20 h-full border-r flex flex-col items-center border-white"
        >   
            <div className="h-20 w-full" 
            />

            <NavItem 
            page={page}
            dex={0}
            icon={
                <RiHome2Line 
                size={25}
                color='white'
                />
            } 
            onClick={() => {setPage(0)} }
            />

            <NavItem 
            page={page}
            dex={1}
            icon={
                <ImCoinDollar 
                size={25}
                color='white'
                style={{marginLeft:'2px'}}
                />
            }
            onClick={() => {setPage(1)} }
            />

            <NavItem
            page={page}
            dex={2}
            icon={
                <HiMiniBeaker 
                size={25}
                color='white'
                />
            }
            onClick={() => {setPage(2)}}
            />

        </div>
    );
}
 
export default DashboardNav;