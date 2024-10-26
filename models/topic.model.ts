import mongoose from "mongoose";
const topicSchema=new mongoose.Schema(
    {
        title: String,
        avatar: String,
        description: String,
        status: String,
        slug: String,
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date
    },
    //để update các time tạo sp và sửa 
    {
        timestamps:true
        
    }
);



const Topic=mongoose.model("Topic",topicSchema,"topics");
export default Topic;