const mongoose = require('mongoose');
const schema = mongoose.Schema ; 
const registration = new schema({
    userName : {
        type: String,
        required: true
    },
    passWord:{
        type : String,
        required:true
    },
    retypePas:{
        
    }
})