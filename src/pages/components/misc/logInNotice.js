


const NotLoggedIn = () => {
    
    return(
        <div className="w-full h-[92vh] flex items-center justify-center bg-glass-gray"
        >
            
            <div className="w-1/3 h-1/2 bg-glass-gray rounded-lg border border-white text-white
            flex flex-col items-center justify-center"
            >

                <div className="w-5/6  h-4/6 "
                >
                    <div className="mb-8 text-4xl font-bold font-primary"
                    >
                        Wallet 
                        <span className="text-purple"> Not </span> 
                        Connected
                    </div>
                    
                    <div className="text-2xl font-primary"
                    >   
                        <span className="text-purple">
                            Hmmm... 
                        </span>
                        <br />
                        <br />
                        It doesn't seem like your wallet is connected
                        <br />
                        <br />
                        Do us a favor and connect your wallet for us
                    </div>

                    

                </div>

            </div>

        </div>
    )
}
 
export default NotLoggedIn;