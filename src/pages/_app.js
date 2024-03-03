import '@/styles/globals.css'
import Navbar from './components/navbar'
import SideMenu from './components/sidemenu'
import { useEffect, useState } from 'react'
import MobileBackground from './components/backgrounds/mobilebackground';
import {motion} from 'framer-motion';

import * as Baker from '../tools/cookie-functions.js';



export default function App({ Component, pageProps }) {

  const [open,setOpen] = useState(false);
  

  const init = () => {
    
    // Baker.setCookie('{}')
    // console.log('hit')
    // Baker.resetCookieData();
    Baker.checkForCookie();
  }


  useEffect(() => {
    init();
  }, []);

  return(
    <div className='w-screen h-screen relative overflow-y-hidden overflow-x-hidden'
     
    >
      <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js"></script>
      
      <Navbar
      open={open}
      setOpen={setOpen}
      />
      <MobileBackground />
      

      

      
      

      <motion.div className='w-full h-full flex absolute overflow-show
      sm:hidden
      md:hidden
      lg:flex
      xl:flex
      '
      initial={{right:0}}
      animate={{
        right:open? '500px':0
      }}
      >

        <SideMenu 
        open={open}
        setOpen={setOpen}
        />

        <motion.div className='w-full h-full relative'
        
        >
          <Component {...pageProps} />
        </motion.div>
      </motion.div>

      <div className='w-full h-[92vh] bg-glass-gray absolute bottom-0
      flex items-center justify-center'
      >
        
        <div className='w-5/6 h-3/6 text-white
        flex flex-col'
        >

          <div className=' font-display text-7xl py-3'
          >
            Welcome!
          </div>

          

          <div className='text-lg px-1 font-primary mt-6 leading-8'
          >
            This version of the website is heavily
            underconstruction and currently does not 
            support mobile view.
          </div>

          


        </div>

      </div>

    </div>
  )
  
}
