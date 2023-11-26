import { useRouter } from "next/router";
import Button1 from "../misc/button-1";
import navJson from '@/json_files/nav-data.json';



const LoggedInOptions = ({setOpen,disconnectWallet}) => {
    const router = useRouter();

    return(
        <div className="flex"
        >
            
            {
                Object.keys(navJson).map((key,dex) => {
                    const item = navJson[key];
                    

                    
                    
                    if (item.area == 1) {
                        return (
                            <Button1 key={key}
                            _label={item.title}
                            _onClick={() => {
                                setOpen(false);
                                setTimeout(() => {
                                    router.push(item.path);
                                }, 1000);
                            }}
                            style={{
                                marginRight:'10px'
                            }}
                            /> 
                        )
                    }

                        
                    
                })
            }
            

            <Button1
            _label='Disconnect'
            _onClick={disconnectWallet}
            />

        </div>
    )
}

export default LoggedInOptions;