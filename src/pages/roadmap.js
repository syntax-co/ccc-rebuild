import GradientBackground from "./components/backgrounds/gradient-bg";

const RoadMap = () => {
    return (
        <div className="w-full h-full flex items-end relative bg-gray"
        
        >
            <GradientBackground />

            <div className="w-full h-[92vh] z-10 flex"
            >
                <div className="w-1/3 h-full bg-glass-gray 
                border-r border-white flex flex-col" 
                >
                    <div className="h-[10%] flex items-center pl-5 text-white text-5xl font-display
                    border-b border-white"
                    >
                        Roadmap Activations
                    </div>
                    
                    <div className="w-full mx-auto mt-5 px-5 pb-10 text-white text-xl  font-primary
                    border-b"
                    >
                        Our biggest goal is to get the entire collection out of our hands to build a community 
                        as well as fill the community treasury. With that in mind, the following goals have 
                        been assigned to percentage of the collection sold to motivate people to join the Cutthroat 
                        Country Club! Once we hit a target sell through percentage, we will begin to work on 
                        realizing the stated goal.
                    </div>
                    
                    <div className="flex-1"
                    >
                        <spline-viewer url="https://prod.spline.design/zxhN6sSgx2Lmhu4t/scene.splinecode"></spline-viewer>
                    </div>

                </div>

                <div className="flex-1 h-full bg-glass-gray"
                
                >
                    <spline-viewer url="https://prod.spline.design/bjSgnHbFQlXSqeEk/scene.splinecode"></spline-viewer>
                </div>
            </div>
        </div>
    );
}
 
export default RoadMap;