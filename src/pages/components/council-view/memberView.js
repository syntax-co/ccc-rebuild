
import shadowCouncil from '@/json_files/shadow-council.json';


const MemberView = ({name}) => {
    return (
        <div className='h-full flex-1 p-5 bg-glass-gray glassy
        text-white  font-display border border-white '
        >   
            <div className='w-full h-full '
            >
                <div className='w-full h-[12%] text-5xl '
                >
                    {shadowCouncil[name].title}
                </div>
                <div className='w-full h-[88%] flex'
                >

                    <div className='h-full w-1/2 '
                    >
                        <spline-viewer url={shadowCouncil[name].model} />
                    </div>
                    <div className='h-full w-1/2 text-3xl flex items-center'
                    >   
                        <div className='w-5/6 h-5/6'
                        >
                            {shadowCouncil[name].text}
                        </div>
                    </div>


                </div>
            </div>
            

        </div>
    );
}
 
export default MemberView;
