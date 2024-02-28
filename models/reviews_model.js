import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true},
    message: String,
    star:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;