import RotaryDisplay from "./rotatry/rotary-display";


const RotDisplay = ({label,displayValue,valueOptions}) => {
    return (
        <div className="w-fit mx-auto px-10 rounded-lg "
        >
            <div className=" px-2  text-white text-3xl  font-display"
            >
                {label}
            </div>
            
            <div className="pb-2"
            >
                <RotaryDisplay 
                display={displayValue}
                valueOptions={valueOptions}
                />
            </div>
        </div>
    );
}
 
export default RotDisplay;