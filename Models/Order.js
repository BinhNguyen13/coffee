const mongoose=require('mongoose');
const Schema=mongoose.Schema

//Create Schema
const OrderSchema=new Schema({
    
    userId:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    total:{
        type:Number
    }
})
module.exports=Product=mongoose.model("Order",OrderSchema)