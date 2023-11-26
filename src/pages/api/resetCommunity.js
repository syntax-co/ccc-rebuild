import connectMongo from "./mongo/dbConnect";
import Member from "./mongo/model/Member";
import Tracker from "./mongo/model/Tracker";

export default async function handler(req,res) {
    await connectMongo();


    // reset member balance
    const members = await Member.find({});
    
    // dead => awake
    const r1 = await Member.updateMany(
        {state:0},
        {state:1}
    )
    console.log(r1)
    // randomly chosen overflow size to go back to frozen
    const cAwake = await Member.find({state:1});
    var chosen = []
    const overflow = cAwake.length-9000;
    const start = Math.round(Math.random() * (cAwake.length-overflow) );

    if (overflow > 0) {
        chosen = cAwake.slice(start,start+overflow);
    }
    
    chosen.forEach((item) => {
        Member.updateOne({ident:item.ident},{state:2});
    })
    


    // reset trackers
    await Tracker.updateOne({name:'awake'},{value:9000})
    await Tracker.updateOne({name:'frozen'},{value:1000})
    await Tracker.updateOne({name:'dead'},{value:0})



    res.status(200).json({success:true});
}