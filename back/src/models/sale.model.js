import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    products:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    }
},{ _id: false })


const Sale = new mongoose.Schema({
    total:{
        type:Number,
        required:true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    sold_Products:[productShema],
},{
    timestamps:true,
    versionKey:false
})
export default mongoose.model("sale",Sale)