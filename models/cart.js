const mongoose = require('mongoose');
const cartSchema =  new mongoose.Schema({
    usercart:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        
    },
    quantity:{
        type:Number
    },
    productcart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Instrument',
        required:true
    }],
  
    
 
},{timestamps:true});

module.exports = mongoose.model('Cart',cartSchema);