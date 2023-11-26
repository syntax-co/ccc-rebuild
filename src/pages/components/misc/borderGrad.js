




const BorderGrad = ({children, className ,innerClass}) => {
    return (
        <div 
        className={'w-full h-full gradient-1 p-[2px] rounded-md '+className}
        >
            <div className={"w-full h-full rounded-md bg-gray "+innerClass}
            >
                {children}
            </div>
        </div>
    );
}
 
export default BorderGrad;