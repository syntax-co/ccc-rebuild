
import { useEffect, useRef,useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {ethers} from 'ethers';

import {RiTwitterXFill,RiDiscordFill} from 'react-icons/ri';
import {AiOutlineUser} from 'react-icons/ai';
import {SiOpensea} from 'react-icons/si';

import navData from '@/json_files/nav-data.json';
import NavItem from './misc/sideMenuNavItem'
import SocialItem from './misc/socialButtons';
import LoggedInOptions from './userComps/loggedInOptions';
import LoggedOutOptions from './userComps/loggedOutOptions';

import * as Baker from  '../tools/cookie-functions.js';



const SideMenu = ({open,setOpen}) => {
    const [currentSigner,setCurrentSigner] = useState(null);
    const [viewOptions,setViewOptions] = useState(false);
    const [rejected,setRejected] = useState(false);
    const router = useRouter();
    
    const provider = useRef(null);
    const signer = useRef(null)


    

    const forcedRefresh = async() => {
        const data = await Baker.getFormatedData();
        return data.forcedRefresh;
    }

    const loggedIn = async() => {
        const data = await Baker.getFormatedData();
        return data.loggedIn;
    }
    
    const _init_signer = async() => {

        if (window.ethereum == null) {
            provider.current = ethers.getDefaultProvider();
        } else {
            provider.current = new ethers.BrowserProvider(window.ethereum);
            
            try {
                signer.current = await provider.current.getSigner();
                await Baker.setDataValue('loggedIn',true);
                
            } catch(err) {
                setRejected(true);
                console.log(err);
            }
            
            if (signer.current) {
                setCurrentSigner(signer);
            }
        }

    }

    
    const disconnectWallet = async() => {
        signer.current = null;
        setCurrentSigner(null);
        await Baker.setDataValue('loggedIn',false);
        
    }


    const startupCheck = async() => {
        const check1 = await forcedRefresh();
        const check2 = await loggedIn();
        
        if (check2 && !currentSigner) {
            await _init_signer();
        }

        
    }
        
    


    
    useEffect(() => {
        startupCheck();
        

        // setTimeout(() => {
        //     connectWallet();
        // }, 2000);
        
    }, []);

    return (
        <motion.div className="sidemenu-body font-primary"
        >   
            <div className='h-[92vh] w-full bg-glass-gray border-l border-white'
            >
                {/* top bar */}
                <div className="w-full h-[10vh] flex items-end justify-center ">
                    
                    <div className='w-5/6 flex relative'>

                        <div className=' flex items-center ' >
                            

                        </div>


                        <div className='ml-auto relative flex items-end'>
                            
                            <div className='mr-3 text-white text-xl'
                            >
                                {
                                    currentSigner?
                                    signer.current.address.split('').splice(0,10).join('')+'...':
                                    'Login'
                                }
                            </div>
                                    
                            
                            <motion.div id='user-button-1' className='w-10 h-10 relative p-[2px] rounded-full cursor-pointer gradient-1'
                            whileHover={{rotate:'8deg'}}

                            onClick={() => {
                                setViewOptions(!viewOptions);
                            }}
                            >   
                                <div className='w-full h-full rounded-full bg-gray
                                flex items-center justify-center'
                                >
                                    <AiOutlineUser 
                                    size={25}
                                    color='white'
                                    />
                                </div>

                                <motion.div className=' w-2.5 h-2.5 rounded-full absolute right-[-4px] top-[-4px]'
                                initial={{
                                    backgroundColor:'#ff5454'
                                }}
                                animate={{
                                    backgroundColor:currentSigner? '#54ff82':'#ff5454'
                                }}
                                >

                                </motion.div>

                            </motion.div>
                            
                        </div>
                        
                        
                        {/* options */}
                        <motion.div className='w-full h-14 mt-2 absolute top-full flex items-center justify-end  rounded-md'
                        initial={{opacity:0}}
                        animate={{
                            opacity:viewOptions? 1:0
                        }}
                        >
                            {   
                                currentSigner?
                                <LoggedInOptions
                                setOpen={setOpen}
                                disconnectWallet={disconnectWallet}
                                />:
                                <LoggedOutOptions
                                connectWallet={_init_signer}
                                />
                            }
                        </motion.div>

                    </div> 

                </div>

                <div className='h-[90%] w-full flex items-center justify-center'
            >
                <div className='w-5/6 h-5/6 flex flex-col relative top-3'>


                    {
                        Object.keys(navData).map((key,dex) => {
                            const item = navData[key];
                            if (item.area == 0) {

                                return(
                                    <NavItem key={key}
                                    label={item.title} 
                                    path={item.path}
                                    // router={router}
                                    setOpen={setOpen}
                                    />
                                )
                            }

                        })
                    }

                    
                
                    <div className='w-full h-14  mt-auto flex flex-row-reverse'>

                        <SocialItem
                        icon={
                            <RiTwitterXFill 
                            size={30}
                            color='white'
                            />
                        }
                        socialType={'discord'}
                        />

                        <SocialItem
                        icon={
                            <RiDiscordFill 
                            size={30}
                            color='white'
                            />
                        }
                        socialType={'X.com'}
                        />

                        <SocialItem
                        icon={
                            <SiOpensea 
                            size={30}
                            color='white'
                            />
                        }
                        socialType={'opensea'} 
                        />
                        

                    </div>
                </div>
            </div>

            </div>

            
            
            
            

            
        </motion.div>
    );
}
 
export default SideMenu;