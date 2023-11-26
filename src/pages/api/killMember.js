import connectMongo from "./mongo/dbConnect";
import Member from "./mongo/model/Member";
import Tracker from "./mongo/model/Tracker";



export default async function handler(req,res) {
    await connectMongo();
    
    // udpate state
    const body = req.body;
    const update = {state:0}
    await Member.findOneAndUpdate({ident:body.ident},update);
    
    // update trackers
    const currentAwake =  await Tracker.findOne({name:'awake'});
    const currentDead = await Tracker.findOne({name:'dead'});

    const awakeUpdate = {value:currentAwake.value-1}
    const deadUpdate = {value:currentDead.value+1}
    
    await Tracker.updateOne({name:'awake'},awakeUpdate);
    await Tracker.updateOne({name:'dead'},deadUpdate);

    res.status(200).json({success:true})
}