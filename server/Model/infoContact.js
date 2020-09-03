const mongoose = require('mongoose');
const schema = mongoose.Schema;
const infoContact = new schema({
    nameContact: {
        type: String,
        required: true
    },
    mailContact:{
        type:String,
        required:false,
        default:null
    },
    phoneContact:{
        type:String,
        required:false,
        default:null
    },
    titleFeedback:{
        type:String,
        required:true
    },
    contentFeedback:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('listContact',infoContact);