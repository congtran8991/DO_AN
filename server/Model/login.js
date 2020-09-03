const mongoose = require('mongoose')
const schema = mongoose.Schema;
const loGin = new schema({
    userName : {
        type: String,
        required: true
    },
    passWord:{
        type : String,
        required:true
    }
   
})
module.exports=mongoose.model('login',loGin);