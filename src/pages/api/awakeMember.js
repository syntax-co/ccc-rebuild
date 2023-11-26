import connectMongo from "./mongo/dbConnect";
import Member from "./mongo/model/Member";
import Tracker from "./mongo/model/Tracker";



export default async function handler(req,res) {
    await connectMongo();

    const body = req.body;
    const update = {state:2}
    await Member.findOneAndUpdate({ident:body.ident},update);
    
    // update trackers
    const currentAwake =  await Tracker.findOne({name:'awake'});
    const currentFrozen = await Tracker.findOne({name:'frozen'});

    const awakeUpdate = {value:currentAwake.value+1}
    const frozenUpdate = {value:currentFrozen.value-1}

    await Tracker.updateOne({name:'awake'},awakeUpdate);
    await Tracker.updateOne({name:'frozen'},frozenUpdate);

    res.status(200).json({success:true});
}