import GradientBackground from "./components/backgrounds/gradient-bg";



const Governance = () => {
    return (
        <div className="w-full h-full relative flex items-end bg-gray"
        >
            <GradientBackground />

            <div className="w-full h-[92vh] z-10 flex items-center justify-center"
            >

                <div className="w-5/6 h-5/6 bg-glass-gray rounded-lg border border-white
                flex items-center justify-center"
                >
                    
                    <div className="w-[700px] text-white"
                    >
                        <div className="mb-10 text-5xl font-display"
                        >
                            Not Available Yet
                        </div>

                        <div className="text-2xl font-primary"
                        >
                            Governance is currently not available yet.
                            <br />
                            <br />
                            Once Cutthroat Country Club launches governance will be handled through
                            the on-chain platfrom
                            <span className="text-[#725bffff]"
                            > Tally</span>

                        </div>

                        <div className="w-20 h-20 mt-3 rounded-md"
                        style={{
                            backgroundImage:'url(./images/tally-logo.png)',
                            backgroundPosition:'center',
                            backgroundSize:'cover'
                        }}
                        ></div>
                    </div>
                    


                </div>

            </div>

        </div>
    );
}
 
export default Governance;