import { Divide as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, lazy,Suspense } from 'react';

import Spacer from "../spacer";
import shadowCouncil from '@/json_files/shadow-council.json';
import dynamic from 'next/dynamic';
// import Spline from '@splinetool/react-spline';
const Spline = lazy(() => import("@splinetool/react-spline"));

const MemberMenu = ({
    dex,
    title,
    image,
    delay,
    menuOpen,
    currentMember,
    setCurrentMember,
    startTransition
}) => {
    
    return(
        <motion.div className="w-full h-12 my-3 flex justify-center relative"
        initial={{
            right:'-100%'
        }}
        animate={{
            right:menuOpen? 0:'-100%',
            transition:{
                delay:delay? delay:.5
            }
        }}
        >

            <div className='w-[200px]  h-full flex items-center rounded-full border border-trans-purple 
            bg-[#10101099] overflow-hidden relative '
            onClick={() => {
                startTransition()

                setTimeout(() => {
                    setCurrentMember(dex);
                }, 500);
            }}
            >

                <div className='w-full flex items-center relative'
                >
                    <motion.div className='text-white w-1/2 absolute'
                    initial={{left:'-100%'}}
                    animate={{
                        left:currentMember == dex? '10px':'-100%'
                    }}
                    >
                        {title}
                    </motion.div>
                    
                    <motion.div className='w-10 h-10 mx-1 bg-center bg-contain rounded-full border border-blue
                    overflow-hidden absolute'
                    initial={{left:0}}
                    animate={{
                        left:currentMember == dex? '152px':0
                    }}
                    >
                        <img src={image} 
                        />
                    </motion.div>

                    <motion.div className='text-white w-1/2 absolute'
                    initial={{left:'50px'}}
                    animate={{
                        left:currentMember == dex? '200px':'50px'
                    }}
                    >
                        {title}
                    </motion.div>
                </div>
                

            </div>

        </motion.div>
    )
}


const MenuOpenClose = ({menuOpen,setMenuOpen,currentMember,hide}) => {

    return(
        <div className="w-full my-2 relative flex justify-end"
        >
            <AnimatePresence key='member-title-presence' mode='wait' >
                {
                    !hide&&
                    <motion.div className='h-full text-white text-4xl absolute left-0 ml-5
                    flex items-center font-display'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    >
                        {
                            shadowCouncil[Object.keys(shadowCouncil)[currentMember]].title
                        }
                    </motion.div>
                }
            </AnimatePresence>

            <div className="w-12 h-12 mr-2 rounded-full flex items-center justify-center"
            style={{
                background:'linear-gradient(45deg ,#E94AFFaa,#4AE6FFaa)'
            }}
            >
                <Hamburger 
                toggle={setMenuOpen}
                toggled={menuOpen}
                color='white'
                size={20}
                />
            </div>
        </div>
    )
}


const TeamMenu = ({menuOpen,setMenuOpen,currentMember,setCurrentMember,startTransition}) => {

    return(
        <motion.div className="w-3/5 h-[78vh] z-10 bg-[#10101055] rounded-l-md absolute glassy"
        style={{
            right:0
        }}
        initial={{right:'-100%'}}
        animate={{
            right: menuOpen? 0:'-100%',
            transition:{
                delay: !menuOpen? 1.25:0
            }
        }}
        >
            
            
            {
                Object.keys(shadowCouncil).map((key,dex) => {
                    const data = shadowCouncil[key];
                    const delay = .2
                    return(
                        <MemberMenu key={key}
                        dex={dex}
                        title={data.title}
                        image={data.image} 
                        delay={(dex*delay)+.5} 
                        menuOpen={menuOpen} 
                        currentMember={currentMember}
                        setCurrentMember={setCurrentMember}
                        startTransition={startTransition}
                        />
                    )
                })
            }


            

        </motion.div>
    )
}


const Team = () => {

    const [menuOpen,setMenuOpen] = useState(false);
    const [currentMember,setCurrentMember] = useState(0);

    const [hide,setHide] = useState(false);

    const startTransition = () => {
        
        setHide(true);

        setTimeout(() => {
            setHide(false);
        }, 2000);
    }

    useEffect(() => {
        
    }, [currentMember]);

    return (
        <div className="w-full h-full  relative overflow-x-hidden"
      >
        
        <Spacer size={3} />
        <MenuOpenClose
        hide={hide}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentMember={currentMember} 
        />

        <TeamMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentMember={currentMember}
        setCurrentMember={setCurrentMember}
        startTransition={startTransition}
        />

        <div className='w-full h-[88vh] '
        >

            {/* model */}
            <div className='w-full h-1/2'
            >
                <AnimatePresence key={'member-model-presence'} mode='wait' >
                    {
                        !hide &&
                        <motion.div className='w-full h-full'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        >   
                            
                            
                            <Suspense fallback={<div>Loading...</div>}>
                                <Spline scene={shadowCouncil[Object.keys(shadowCouncil)[currentMember]].model} />
                            </Suspense>
                            
                            
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

            
            {/* text section */}
            <div className='w-full h-1/2 flex items-center justify-center'
            >   
                <AnimatePresence key={'member-text-presence'} mode='wait'>
                    {
                        !hide&&
                        <motion.div className='w-[90%] h-[90%] flex items-center text-white text-xl leading-7
                        bg-[#10101055] rounded-lg p-5
                        '
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        >
                            {
                                shadowCouncil[Object.keys(shadowCouncil)[currentMember]].text
                            }
                        </motion.div>
                    }
                </AnimatePresence>
            </div>


        </div>
        

      </div>
    );
}
 
export default Team;