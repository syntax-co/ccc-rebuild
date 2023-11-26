import connectMongo from "./mongo/dbConnect"
import Member from "./mongo/model/Member"



export default async function handler(req, res) {
    try {
        await connectMongo();
    } catch(error) {
        console.error(error);
    }
    
    try {
        const body = JSON.parse(req.body);
        const finalData = {};


        if (body['awake'] || body['frozen'] || body['dead']) {
            
            
            if (body['awake']) {
                const awake = await Member.find({state:1});
                
                finalData['awake'] = {
                    'count':awake.length,
                    'members':awake
                };
            } 

            if (body['frozen']) {
                const frozen = await Member.find({state:2});
                finalData['frozen'] = {
                    'count':frozen.length,
                    'members':frozen
                }
            }

            if (body['dead']) {
                const dead = await Member.find({state:0});
                finalData['dead'] = {
                    'count':dead.length,
                    'members':dead
                };
            }


        }
        
        res.status(200).json(finalData);
    } catch(error) {
        console.error(error);
        res.status(404);
    }

    






    
}