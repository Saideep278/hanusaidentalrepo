import mongoose from 'mongoose';

const appSchema = mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    phone: String,
    address:String,
    age:String,
    date: {
        type: Date,
        default: Date.now,
        required: true,
      },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var AppMessage = mongoose.model('AppMessage', appSchema);

export default AppMessage;