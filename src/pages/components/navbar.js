
import { useRouter } from 'next/router';
import MobileMenuButton from './nav-comps/mobile-menu-button';
import WarningNotice from './misc/warningNotice';
import WarningNoticeButton from './misc/warningNoticeButton';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';



const Navbar = ({open,setOpen}) => {
    const router = useRouter();

    const [showWarning,setShowWarning] = useState(false);

    return (
        <div className="navbar-outer"
        >  
            <div className="navbar-inner">

                <div className="icon-holder ">
                    <img className="ccc-icon cursor-pointer"
                    src="./images/ccc-favicon.png"
                    
                    onClick={() => {
                        router.push('/')
                    }}
                    />
                </div>

                <div className='h-full flex flex-1 '>

                    <WarningNoticeButton 
                    setOpen={setShowWarning}
                    />
                    
                    
                    <AnimatePresence >
                        {
                            showWarning &&
                            <WarningNotice key={'warning-panel'}
                            setOpen={setShowWarning}
                            />
                        }
                    </AnimatePresence> 
                    

                </div>

                
                <MobileMenuButton
                open={open}
                setOpen={setOpen}
                />
                

            </div>
        </div>
    );
}
 
export default Navbar;
