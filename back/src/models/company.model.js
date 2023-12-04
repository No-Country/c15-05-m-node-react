import mongoose from "mongoose";

const Company = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sector:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    image:{
        url: String,
        public_id: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    // products: {
    //     type: Array,
    //    ref: "Product",
    // }
},{
    timestamps:true,
    versionKey:false
})
export default mongoose.model("Company", Company)