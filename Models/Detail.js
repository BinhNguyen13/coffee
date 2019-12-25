const mongoose=require('mongoose');
const Schema=mongoose.Schema

//Create Schema
const DetailSchema=new Schema({
    
    orderId:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true
    },
    count:{
        type:Number
    },
    total:{
        type:Number
    }
    
})
module.exports=Product=mongoose.model("Detail",DetailSchema)