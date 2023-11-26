import connectMongo from './mongo/dbConnect';
import Tracker from './mongo/model/Tracker';




export default async function handler(req, res) {
    await connectMongo();
    
    try {
        const result = await Tracker.find({})
        
        res.status(200).json({
            result:result
        })
    } catch(error) {
        console.error(error);
    }


}
  