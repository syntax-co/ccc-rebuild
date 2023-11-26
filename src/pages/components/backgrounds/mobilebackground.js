import { useEffect } from "react";

const MobileBackground = () => {
    
    // useEffect(() => {
    //     console.log('hit')
    // }, []);

    return (
        <div className='mobile-background-body'>
            {/* <img
            src='./images/mobile-blobs.png' 
            /> */}

            {/* <div className="w-full h-full bg-white"
            style={{
                background:'radial-gradient( at -70% 80%, #935BE988 0%, #00000000 80%)'
            }}
            >
                
            </div>


            <div className='background-window'
            ></div> */}


            {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.492/build/spline-viewer.js"></script> */}
            {/* <spline-viewer url="https://prod.spline.design/qdx9ouHHcuAatTJX/scene.splinecode"></spline-viewer> */}
            {/* <spline-viewer url="https://prod.spline.design/aCo1wBvNeGNLsBY7/scene.splinecode"></spline-viewer> */}
            <div className="w-full h-full"
            style={{
                backgroundImage: 'url(./images/background-1.jpg)',
                backgroundSize:'cover',
                backgroundPosition:'center'
            }} 
            />
        </div>
    );
}
 
export default MobileBackground;