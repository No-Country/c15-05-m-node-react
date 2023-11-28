import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:20,
            trim:true
        },
        email:{
            type:String,
            required:true,
            maxlength:40,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
        UA:{
           type:Boolean,
           default:false
        },
        EUA:{
            type:Boolean,
            default:false
        }

    },
    {
        timestamps:true,
        versionKey:false
    }
)
export default mongoose.model("User",User)