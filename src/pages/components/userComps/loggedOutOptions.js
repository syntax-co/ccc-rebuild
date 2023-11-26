
import Button1 from "../misc/button-1"


const LoggedOutOptions = ({connectWallet}) => {

    return(
        <div
        >
            

            <Button1 
            _label='Connect'
            _onClick={connectWallet}
            />

        </div>
    )
}



export default LoggedOutOptions