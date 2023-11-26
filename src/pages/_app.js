import '@/styles/globals.css'
import Navbar from './components/navbar'
import SideMenu from './components/sidemenu'
import { useEffect, useState } from 'react'
import MobileBackground from './components/backgrounds/mobilebackground';
import {motion} from 'framer-motion';

import * as Baker from './tools/cookie-functions.js';



export default function App({ Component, pageProps }) {

  const [open,setOpen] = useState(false);
  

  


  useEffect(() => {

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
      

      

      
      

      <motion.div className='w-full h-full flex absolute overflow-show'
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
    </div>
  )
  
}
