const mongoose = require('mongoose')
const schema = mongoose.Schema;
const historyTest = new schema({
    listQuestionTest : {
        type:Array,
        required: true,
        default:[]
    },
    timeCheckTest:{
        type : String,
        required:true
    },
    listAnswerTest:{
        type:Array,
        required:true,
        default:[]
    },
    correct:{
        type:Array,
        required:true,
        default:[]
    },
    testScores:{
        type:Number,
        required:true
    },
    examCode:{
        type:String,
        required:true
    },
    userHistory:{
        type:String,
        required:true
    },
    levelTest:{
        type:String,
        required:true
    },
    numberQuestion:{
        type:String,
        required:true
    },
    timeTest:{
        type:String,
        required:true
    },
    dateTest:{
        type:String,
        require:true,
    },
    chaptersTest:{
        type:Array,
        required:true
    }
})
module.exports=mongoose.model('historyTest',historyTest);