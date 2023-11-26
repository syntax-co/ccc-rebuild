import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";



import DashboardNav from "./dashboardNav";
import DashboardMain from "./dashboardMain";
import DashboardTreasury from "./dashboardTreasury";
import DashboardLab from "./dashboardLab";





const DashboardView = () => {

    const [page,setPage] = useState(0);

    return (
        <div className="w-full h-[92vh] flex bg-glass-gray"
        >
            <DashboardNav
            page={page}
            setPage={setPage}
            />

            <div className="flex-1"
            >   
                <AnimatePresence mode='wait'>

                    {
                        page == 0 ? <DashboardMain key={'world'} />:
                        page == 1 ? <DashboardTreasury key={'item-1'} />:
                        page == 2 ? <DashboardLab key={'hello'} />:''
                    }
                    
                </AnimatePresence>
                

                
            </div>

        </div>
    );
}
 
export default DashboardView;