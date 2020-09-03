const mongoose = require('mongoose')
const schema = mongoose.Schema;
const createTest = new schema({
    question: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    lever: {
        type: String,
        required: true
    },
    numberQuestion :{
        type:Number,
        required:true
    },
    answerA: {
        type: String,
        required: true
    },
    answerB: {
        type: String,
        required: true
    },
    answerC: {
        type: String,
        required: true
    },
    answerD:{
        type: String,
        required: true
    },
    correctAnswer:{
        type: String,
        required: true
    },
    exerciseFormat:{
        type: String,
        required: true
    },
    desExerciseFormat:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('createTest', createTest);