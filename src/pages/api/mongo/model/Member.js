import { Schema, model, models } from 'mongoose';




const memberSchema = new Schema({
    ident:{
        type: Number,
        required: true
    },
    state:{
        type:Number,
        default:2
    }
})

// ident: nft #
// state: {0:dead,1:awake,2:frozen}

const Member = models.Member || model('Member',memberSchema);


export default Member;