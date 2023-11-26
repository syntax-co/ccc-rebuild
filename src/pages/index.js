import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BiSolidLeftArrow,BiSolidDownArrow } from "react-icons/bi";
import { SiOpensea } from "react-icons/si";


import Team from "./components/council-view/team-viewer";
import RotDisplay from "./components/rotDisplay";
import ShadowCouncilBrowser from "./components/council-view/shadowCouncilBrowser";
import NowThen from "./components/nowthen";


export default function Home() {

  const [tabOneHover,setTabOneHover] = useState(false);
  const [tabTwoHover,setTabTwoHover] = useState(false);
  const [viewCouncil,setViewCouncil] = useState(false);
  const [viewingLore,setViewingLore] = useState(false);
  const [loreState,setLoreState] = useState(true);

  const [currentLore,setCurrentLore] = useState([]);
  const [awake,setAwake] = useState([0,0,0,0,0]);
  const [frozen,setFrozen] = useState([0,0,0,0,0]);
  const [dead,setDead] = useState([0,0,0,0,0]);
  const valueOptions = [0,1,2,3,4,5,6,7,8,9];

  const simData = {
    death_prob_init:.001,
    awake_prob_init:.001,
    death_prob:.01,
    awake_prob:.01,
    death_interval:.001,
    awake_interval:.01
  };
  const popInterval = useRef(null);


  // ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
  // ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
  // █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
  // ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
  // ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
  // ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

  // ██╗   ██╗██╗   ██╗██╗   ██╗██╗   ██╗██╗   ██╗██╗   ██╗
  // ██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║
  // ██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║
  // ╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝
  //  ╚████╔╝  ╚████╔╝  ╚████╔╝  ╚████╔╝  ╚████╔╝  ╚████╔╝ 
  //   ╚═══╝    ╚═══╝    ╚═══╝    ╚═══╝    ╚═══╝    ╚═══╝ 
  const putSpacers = (text) => {
    const holder = [];
    const delim = '#spacer#'
    const sep = text.split(delim)
    
    sep.map((item,dex) => {
      
      holder.push(item)

      if (dex < sep.length-1) {
        holder.push(
          <br />
        )
        holder.push(
          <br />
        )
      }
    })

    return(holder)
  }

  
  const setLore = async() => {
      
      if (loreState) {
        const thenText = await fetch('./texts/then.txt').then((data) => {
          return data.text();
        })
        setCurrentLore(putSpacers(thenText));
      } else {
        const nowText = await fetch('./texts/now.txt').then((data) => {
          return data.text();
        })
        setCurrentLore(putSpacers(nowText));
      }

  //   if (!flagOne) {
  //     const thenText = await fetch('./texts/then.txt').then((data) => {
  //       return data.text()
  //     })
  //     setCurrentLore(putSpacers(thenText))
  //     setFlagOne(true);
  //   } else {
  //     const nowText = await fetch('./texts/now.txt').then((data) => {
  //       return data.text()
  //     })
  //     setCurrentLore(putSpacers(nowText))
  //     setFlagOne(false)
  //   }

  }

  const formatForTracker = (item) => {
    const trackerSize = 5;

    const _string = item.toString().split('');
    const dif = trackerSize - _string.length;

    _string.forEach((elem,dex) => {
      if (typeof(elem) != typeof(0)) {
        _string[dex] = parseInt(elem);
      }
    })

    for (var i=0; i<dif; i++) {
      _string.unshift(0)
    }

    return _string;

  }

//  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗ 
// ██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗
// ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝

  
  // ███████╗██╗███╗   ███╗    ███████╗██╗   ██╗███╗   ██╗ ██████╗███████╗
  // ██╔════╝██║████╗ ████║    ██╔════╝██║   ██║████╗  ██║██╔════╝██╔════╝
  // ███████╗██║██╔████╔██║    █████╗  ██║   ██║██╔██╗ ██║██║     ███████╗
  // ╚════██║██║██║╚██╔╝██║    ██╔══╝  ██║   ██║██║╚██╗██║██║     ╚════██║
  // ███████║██║██║ ╚═╝ ██║    ██║     ╚██████╔╝██║ ╚████║╚██████╗███████║
  // ╚══════╝╚═╝╚═╝     ╚═╝    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚══════╝

  // ██╗   ██╗██╗   ██╗██╗   ██╗██╗   ██╗██╗   ██╗██╗   ██╗
  // ██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║
  // ██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║██║   ██║
  // ╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝╚██╗ ██╔╝
  //  ╚████╔╝  ╚████╔╝  ╚████╔╝  ╚████╔╝  ╚████╔╝  ╚████╔╝ 
  //   ╚═══╝    ╚═══╝    ╚═══╝    ╚═══╝    ╚═══╝    ╚═══╝  

  const resetSim = async() => {
    const target = './api/resetCommunity';
    const result = await fetch(target);
  }
  
  const getTrackerInfo = async() => {
    const target  = process.env.NEXT_PUBLIC_BASE_URL+'/api/getTrackers';
    const result = await fetch(target);
    const resJson = await result.json();
    return resJson.result;
  }

  const getMemberInfo = async() => {
    const target  = process.env.NEXT_PUBLIC_BASE_URL+'/api/getMembers';
    const result = await fetch(target);
     
    const resJson = await result.json();
    return resJson.result;
  }

  const setTrackers = async() => {
    const trackers = await getTrackerInfo();
    
    trackers.forEach(element => {
      const name = element.name;
      const value = element.value;

      // console.log(formatForTracker(value));
      if (name == 'awake') {
        setAwake(formatForTracker(value));
      } else if (name == 'frozen') {
        setFrozen(formatForTracker(value));
      } else if (name == 'dead') {
        setDead(formatForTracker(value));
      }
    });
  }

  const getMemberGroups = async(awake=false,frozen=false,dead=false) => {
    
    const target = './api/getMemberType';

    const inputData = {
      'awake':awake,
      'frozen':frozen,
      'dead':dead
    } 

    const options ={
      method:'POST',
      headers:{
        "ContentType":'application/json',
      },
      body:JSON.stringify(inputData)
    }

    const result = await fetch(target,options);
    const data =  await result.json();
    return data;
  }


  const killMember = async(ident) => {
    const target = './api/killMember';

    const data = {
      ident:ident
    }

    const options={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }

    const result = await fetch(target,options);
    const resData = await result.json();

    if (result.status==200) {
      setTrackers()
      console.log(`Member #${ident} has been killed`);
    }
  }


  const awakeMember = async(ident) => {

    const target = './api/awakeMember';

    const data = {
      ident:ident
    }

    const options={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }

    const result = await fetch(target,options);
    const resData = await result.json();

    if (result.status==200) {
      setTrackers()
      console.log(`Member #${ident} has been Awoken`);
    }

  }

  const balanceTally = async() => {
    const target = './api/checkTallyBalanced';

    const result = await fetch(target);
    if (result.status == 200) {
      console.log('Tallies have been balanced');
    }
  }

  const econSim = async() => {
    
    // random number to determine a death
    const deathRoll = Number(Math.random().toFixed(4));
    // random number to determine an awakening
    const awakeRoll = Number(Math.random().toFixed(4));
    
    
    if (deathRoll<=simData.death_prob) {
      const mems = await getMemberGroups(false,true);
      const dex = Math.round(mems.frozen.members.length * Math.random())
      const choice = mems.frozen.members[dex];
      await killMember(choice.ident);
      simData.death_prob = simData.death_prob_init;
    } else {
      simData.death_prob = Number((simData.death_prob + simData.death_interval).toFixed(4))
      
    }


    if (awakeRoll<=simData.awake_prob) {
      const mems = await getMemberGroups(false,true);
      const dex = Math.round(mems.frozen.members.length * Math.random())
      const choice = mems.frozen.members[dex];
      
      try {
        await awakeMember(choice.ident);
        simData.awake_prob = simData.awake_prob_init;  
      } 
      catch(error) {
        console.log(error)
      }

    } else {
      simData.awake_prob = Number((simData.awake_prob + simData.awake_interval).toFixed(4))
    }


    // reset prob


    // reset check
    const deathCount = getMemberGroups(false,false,true);
    if (deathCount.length>500) {
      await resetSim();

      console.log('Sim has been reset!!');
      // await setTrackers();
    } else {
      // await setTrackers();
    }

    // console.log(simData.death_prob,simData.awake_prob);
    

  }
  //  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗  ███╗ 
  // ██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗██╔██╗
  // ╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
                                                                          
                                                                          
                                                                          
                                                                          
  useEffect(() => {
    setLore();
  }, [loreState]);


  useEffect(() => {
    // popInterval.current = 
    // setInterval(() => {
    //   econSim();
    // }, 5000);
    
    // resetSim();
    
    setTrackers();
    // return(
    //   clearInterval(popInterval.current)
    // );
  }, []);

  // ██████╗  ██████╗ ██████╗ ██╗   ██╗
  // ██╔══██╗██╔═══██╗██╔══██╗╚██╗ ██╔╝
  // ██████╔╝██║   ██║██║  ██║ ╚████╔╝ 
  // ██╔══██╗██║   ██║██║  ██║  ╚██╔╝  
  // ██████╔╝╚██████╔╝██████╔╝   ██║   
  // ╚═════╝  ╚═════╝ ╚═════╝    ╚═╝   
                                    
  return (
    <div className='index-main-body'
    >
      {/* spline tool imports */}
      


      


      <div className="section-1 "
      > 

        <motion.div className="w-full h-[92vh] absolute"
        initial={{left:'-100%'}}
        animate={{
          left:viewCouncil? 0:'-100%'
        }}
        >

          <ShadowCouncilBrowser />

        </motion.div>



        <motion.div className="w-full h-[92vh] flex absolute"
        initial={{left:0}}
        animate={{
          left:viewCouncil? '100%':0
        }}
        >
          
          <div className="w-[80px] h-full relative"
          
          onClick={() => {setViewCouncil(!viewCouncil)}}
          onMouseEnter={() => {setTabOneHover(true)}}
          onMouseLeave={() => {setTabOneHover(false)}}
          > 
            <motion.div className="w-full h-full flex items-center justify-center absolute
            border-r border-white bg-glass-gray cursor-pointer"
            initial={{right:0}}
            animate={{
              right:viewCouncil?'100%':0
            }}
            >
              <div className="w-5/6 h-5/6 flex flex-col justify-center items-center relative"
              >
                <motion.div
                initial={{translate:0}}
                animate={{
                  translateX:tabOneHover? -10:0
                }}
                >
                  <BiSolidLeftArrow size={40} color="white" />
                </motion.div>

                <div className="w-full h-4/5 relative flex items-center justify-center"
                >
                  <div className="text-white w-[400px]  text-6xl font-display absolute"
                  style={{rotate:'-90deg'}}
                  >
                    Shadow Council
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full  h-full flex flex-col"
          >
            <div className="h-[12%] w-full bg-glass-gray border-b flex border-white"
            >
              
              <div className="w-1/4 h-full border-r border-white"
              >
                <RotDisplay 
                label={'Awake'}
                displayValue={awake}
                valueOptions={valueOptions}
                />

                
              </div>

              <div className="w-1/4 h-full border-r border-white"
              >
                <RotDisplay 
                label={'Frozen'}
                displayValue={frozen}
                valueOptions={valueOptions}
                />
              </div>

              <div className="w-1/4 h-full border-r border-white"
              >
                <RotDisplay 
                label={'Dead'}
                displayValue={dead}
                valueOptions={valueOptions}
                />
              </div>

            </div>
            
            <div className="w-full h-1/2 flex-1 flex bg-glass-gray"
            >
              
              <div className="h-full w-3/5 border-r flex items-center justify-center border-white"
              >
                <div className="w-5/6 h-5/6 "
                >
                  
                  {/* welcome */}
                  <div className="w-full flex flex-col mt-8 text-white font-primary "
                    >
                    <div className="text-8xl"
                    >
                      <span className="text-purple"
                      >W</span>elcome
                    </div>
                    <div className="text-5xl ml-2 my-6"
                    >
                      To
                    </div>

                    <div className="text-6xl flex"
                    >
                      <div className="mx-2"
                      >
                        <span className="text-purple"
                        >C</span>utthroat
                      </div>
                      
                      <div className="mx-2"
                      >
                        <span className="text-purple"
                        >C</span>ountry 
                      </div>
                      
                      <div className="mx-2"
                      >
                        <span className="text-purple"
                        >C</span>lub
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-[400px] my-20  text-white text-2xl font-primary"
                  >
                    Be a part of an investment group where everyone has one goal in common
                    Amassing Wealth!
                  </div>

                  {/* opensea button */}
                  <div 
                  >
                    <div className="w-[200px] h-[60px] p-[2px] rounded-md flex items-center justify-center
                    gradient-1"
                    >
                      <div className="w-full h-full flex "
                      >
                        
                        <div className="w-1/4 h-full bg-gray
                        rounded-l-md flex items-center justify-center
                        "
                        >
                          <SiOpensea size={30} color="white" />
                        </div>

                        <div className="w-3/4 h-full bg-gray
                        rounded-r-md ml-[2px] flex items-center justify-center"
                        >
                          <div className="w-4/6 h-5/6 text-white text-2xl font-primary
                          flex items-center"
                          >
                            OpenSea
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <div className="h-full w-2/5 flex flex-col"
              >
              
                <motion.div className="w-full flex flex-col-reverse items-center
                border-b border-white"
                initial={{height:'10%'}}
                animate={{
                  height:viewingLore? '100%':'10%'
                }}
                > 
                  {/* now/then tab */}
                  <div className="w-full h-[70px] cursor-pointer
                  flex items-center justify-center"
                  onClick={() => {setViewingLore(!viewingLore)}}
                  onMouseEnter={() => {setTabTwoHover(true)}}
                  onMouseLeave={() => {setTabTwoHover(false)}}
                  >
                    <div className="w-5/6 h-full  flex items-center justify-center"
                    >

                        <div className="text-white text-6xl flex-1 font-display"
                        >
                          Now/Then
                        </div>
                        <motion.div
                        initial={{translateY:0}}
                        animate={{
                          translateY:tabTwoHover? 8:0,
                          rotate:viewingLore? '180deg':'0deg'
                        }}
                        >
                          <BiSolidDownArrow size={40} color="white" />
                        </motion.div>

                    </div>
                  </div>
                  
                  {/* lore text area */}
                  <AnimatePresence >
                    {
                      viewingLore?
                      <NowThen
                      loreState={loreState}
                      setLoreState={setLoreState}
                      currentLore={currentLore}
                      setLore={setLore}
                      />
                      :''
                    }
                  </AnimatePresence>

                </motion.div>
                
                <div className="w-full flex-1 flex items-center justify-center overflow-hidden"
                >
                  <spline-viewer url="https://prod.spline.design/jE49jqjlIt20Ci-L/scene.splinecode"></spline-viewer>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  )
}
