const mongoose = require('mongoose');

const instrumentSchema = new mongoose.Schema({
    name: {
        type: String
       
    },
    description: {
        type: String
     
    },
    rate: {
        type : Number
        
    },
    instrumentimg: {
        type:String,

    },
    instrumentcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        // required:true
        
    }
}, { timestamps: true });

module.exports = mongoose.model('Instrument', instrumentSchema);
