import { Schema, model, models } from 'mongoose';





const trackerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    value:{
        type:Number,
        default:0
    }
})

const Tracker = models.Tracker || model('Tracker',trackerSchema);


export default Tracker;