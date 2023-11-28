import mongoose from "mongoose";

const Seler = new mongoose.Schema({
    total:{
        type:Number,
        required:true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    sold_Products:{
        type:Array
    },
})
export default mongoose.model("seler",Seler)