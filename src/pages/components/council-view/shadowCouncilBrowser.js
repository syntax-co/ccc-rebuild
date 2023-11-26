import MemberView from "./memberView";


const ShadowCouncilBrowser = () => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-glass-gray"
        >
            <div className="w-10/12 h-[90%] grid grid-rows-2 grid-cols-2 gap-2
            
            "
            >
                <MemberView
                name='the-chairman'
                />
                <MemberView
                name='the-ceo'
                />
                <MemberView
                name='the-president'
                />
                <MemberView
                name='the-director'
                />
            </div>
        </div>
    );
}
 
export default ShadowCouncilBrowser;