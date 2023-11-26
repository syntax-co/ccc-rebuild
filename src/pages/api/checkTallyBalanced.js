import connectMongo from "./mongo/dbConnect";
import Member from "./mongo/model/Member";
import Tracker from "./mongo/model/Tracker";

export default async function handler(req, res) {
    await connectMongo();
    
    const currentMembers = await Member.find({});
    const counts = {
        awake:0,
        frozen:0,
        dead:0
    }


    currentMembers.forEach(mem => {
        switch (mem.state) {
            case 0:
                counts.dead = counts.dead+1;
                break;
            case 1:
                counts.awake = counts.awake+1;
                break;
            case 2:
                counts.frozen = counts.frozen+1;
                break;
            default:
                break;
        }
    })
    
    Tracker.updateOne({name:'awake'},{value:counts.awake})
    Tracker.updateOne({name:'frozen'},{value:counts.frozen})
    Tracker.updateOne({name:'dead'},{value:counts.dead})

    res.status(200).json({success:true})
}
  