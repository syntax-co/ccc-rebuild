import GradientBackground from "./components/backgrounds/gradient-bg";

const About = () => {
    const circleSize = 400;
    const gapSize = 20

    return (
        <div className="w-full h-full relative bg-gray
        flex items-end"
        
        >
            <GradientBackground />

            <div className="w-full h-[92vh] flex flex-col relative bg-glass-gray
            "
            >      
                <div className="w-full h-[90px] border-b border-white
                flex items-center justify-center"
                >
                    <div className="w-5/6"
                    >
                        <div className="text-white text-6xl font-display "
                        >
                            Uitility
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 flex text-white text-xl font-primary"
                >
                    <div className="h-full w-1/3 border-r-2 border-white
                    flex items-center justify-center"
                    >
                        <div className="w-5/6 h-5/6 "
                        >   
                            
                            
                            &emsp;Cutthroat Country Club (CCC) is a collection of 10,000 randomly generated cutthroat 
                            old men NFTs with different traits and rarities engaged in an eternal battle royale 
                            on the ethereum blockchain. Your Cutthroat is a sick profile picture, but even better, 
                            it proves your membership and bestows voting rights in the Cutthroat Country Club, 
                            an exclusive investment community focused on AMASSING WEALTH.
                            
                            <br />
                            <br />

                            &emsp;33.33% of all initial sales will fund the Cutthroat Country Club Treasury. These funds 
                            will be used by the CCC for community-decision based investing in other NFT projects, 
                            cryptocurrency, and more traditional assets. Every active Cutthroat will receive 10 $STONKS 
                            a day for 10 years. The voting process for selecting assets is based upon this utility token, 
                            and is relatively simple. An asset will be proposed (say, a Magic Mushroom Clubhouse NFT) and 
                            voting will open for a week. Cutthroats can assign any number of $STONKS to vote either yes or 
                            no to invest in a certain project (one $STONK equals one vote). At the end of the voting period, 
                            if the yes's have it, the asset is acquired, and if the no's have it, the asset is not. 
                            All $STONKS tokens spent on the vote go to the community treasury.
                            
                        </div>
                    </div>
                    <div className="h-full w-1/3 border-r-2 flex items-center justify-center border-white"
                    >
                        <div className="w-5/6 h-5/6 "
                        >
                            &emsp;The community treasury does not want to hold $STONKS. Its entire token supply will always be on 
                            sale (price determined by market) such that if a vote is happening that is particularly important 
                            to a Cutthroat and he wants to put more votes in on an issue than he currently has $STONKS, he can 
                            purchase more tokens from the treasury to vote with. All revenue from the selling of the treasury's 
                            $STONKS then goes into the community treasury's investment fund, so by purchasing more tokens to vote, 
                            the community's investment potential actually increases.

                            <br />
                            <br />

                            &emsp;A Cutthroat can be as active or inactive as they please with this voting system. There is no 
                            consequence or lost opportunity in not participating in a vote, as by abstaining, a Cutthroat 
                            will retain more $STONKS than a Cutthroat who participated. In this realm, Cutthroats also would have 
                            the potential to sell the $STONKS their NFT generates amongst themselves and make revenue (dependent 
                            on the market price of the token) without having to participate in the investing activities of the CCC 
                            at all.
                        </div>
                    </div>
                    <div className="h-full w-1/3 flex items-center justify-center "
                    >
                        <div className="w-5/6 h-5/6 " >
                            The Cutthroat Country Club will hold 1,000 still frozen members in its community treasury. Every week, the 
                            club will vote on whether or not they will awaken another sleeper to join the eternal battle, kill them to 
                            prevent entry forever, or ignore them for now. If the CCC chooses to awaken, a random NFT from the reserve 
                            will be "awoken" and sold with 100% of the proceeds going to the Cutthroat Country Club Treasury for MORE
                            PURCHASING POWER, however, this decision will affect an individual's share of the CCC's total assets; for 
                            example, if there are 9,000 active Cutthroats, each active NFT represents 1/9,000th of the CCC's total 
                            assets, but if a Cutthroat were to be awakened, each NFT would then represent 1/9001th of the CCC's total 
                            assets. If the CCC chooses to kill, a random NFT will be burned forever, and the potential cap for the 
                            distribution of the percentage ownership of the CCC's assets would decrease; for example, currently, the 
                            lowest possible percentage ownership for an active NFT to represent is 1/10,000th of the CCC's assets, 
                            but if a Cutthroat were to be burned, the lowest possible percentage ownership would become 1/9,999th 
                            of the CCC's assets. Finally, if the CCC chooses to ignore, the CCC can put off a decision for another 
                            blissful week.

                            <br />
                            <br />

                            Being a member of the Cutthroat Country Club also grants exclusive early access to future NFT collections 
                            released by the Shadow Council, which is uh, pretty nifty.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default About;