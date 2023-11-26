import { BsExclamation } from "react-icons/bs";

const WarningNoticeButton = ({open,setOpen}) => {
    return (
        <div className="w-fit h-full grid place-items-center"
        >
            <div className="w-10 h-10 rounded-md bg-red-400 grid place-items-center
            cursor-pointer"

            onClick={() => {
                setOpen(true)
            }}
            >  
                <BsExclamation 
                size={30}
                color='white'
                />
            </div>
        </div>
    );
}
 
export default WarningNoticeButton;