import { useEffect } from "react";

const Spacer = ({size,format='screen'}) => {


    useEffect(() => {
      if (typeof(0) == typeof(size)) {
        
      }
    }, []);

    return(
      <div className=" w-full"
      style={{
        height:`${typeof(size)==typeof(0)? size:5}vh`
      }}
      ></div>
    )
  }
 
export default Spacer;