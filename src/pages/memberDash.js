import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";
import * as Baker from './tools/cookie-functions.js';


import NotLoggedIn from "./components/misc/logInNotice.js";
import DashboardView from "./components/dashboard/dashboardView.js";
 

const Dashboard = () => {


    const provider = useRef(null);
    const [currentSigner,setCurrentSigner] = useState(false);
    const prevCookie = useRef(null);
    const poller = useRef(null)
    const signer = useRef(null)



    const getLoggedIn = async() => {
        const data = await Baker.getFormatedData();
        
        return(data.loggedIn);
    }

    const _init_signer = async() => {

        if (window.ethereum == null) {
            provider.current = ethers.getDefaultProvider();
        } else {
            provider.current = new ethers.BrowserProvider(window.ethereum);
            
            try {
                signer.current = await provider.current.getSigner();
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

        const check1 = await getLoggedIn();

        
        if (check1) {
            _init_signer()
        } 

    }

    

    const pollCookies = async() => {
        const result = await JSON.parse(Baker.getCookie());
        const res2 = await JSON.parse(prevCookie.current);

        
        
        if (res2) {
            if (result.loggedIn != res2.loggedIn) {
                if (result.loggedIn) {
                    _init_signer()
                } else {
                    disconnectWallet()
                }

                prevCookie.current = JSON.stringify(result); 
            }
        }
    }

    useEffect(() => {
        
        if (!poller.current && prevCookie.current) {
            poller.current = setInterval(() => {
                pollCookies();
            }, 1000,);
            // console.log(prevCookie.current)
        } 

    }, [prevCookie.current]);

    useEffect(() => {
        startupCheck();
        prevCookie.current = Baker.getCookie();
        

    }, []);

 
    return (
        <div className="w-full h-full flex items-end"
        >
            
            {
                currentSigner?
                <DashboardView />:
                <NotLoggedIn />
            }

            
        </div>
    );
}
 
export default Dashboard;