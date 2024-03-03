import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,  
            ref:"User"  //referencing the User model
        }
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",//referencing Message model
            default:[],
        }
    ]
}, { timestamps: true });

const  Conversation=mongoose.model("Conversation",conversationSchema);  
export default  Conversation;  