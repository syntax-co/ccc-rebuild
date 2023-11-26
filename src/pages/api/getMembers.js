import connectMongo from './mongo/dbConnect';
import Member from './mongo/model/Member';



export default async function handler(req, res) {
  await connectMongo();
  
  try {
    const result = await Member.find({})
    res.status(200).json({
        result:result
    })
      
  } catch(error) {
      console.error('getMembers'+error);
  }


}