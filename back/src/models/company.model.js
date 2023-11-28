import mongoose from "mongoose";

const Company = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    sector:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    }
},{
    timestamps:true,
    versionKey:false
})
export default mongoose.model("Company", Company)