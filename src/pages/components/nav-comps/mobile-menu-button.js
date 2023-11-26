import {BiMenuAltRight} from 'react-icons/bi';
import { Sling as Hamburger } from 'hamburger-react';

const MobileMenuButton = ({open,setOpen}) => {
    return (
        <div id='menu-button-holder' className="hamburger-holder"
        
        >
            <Hamburger
                toggle={setOpen} 
                toggled={open}
                color='white'
            />

        </div>
    );
}
 
export default MobileMenuButton;