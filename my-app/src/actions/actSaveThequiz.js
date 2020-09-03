import * as Types from './../constants/ActionType';
import { Axios } from '../Utils/Axios';
export const actSaveTheQuiz = (dataHistory) => {
    console.log("dd");
    console.log(dataHistory);
   return async dispatch => {
       let dataSaveTheQuiz=await Axios('post', '/Api/saveTheQuiz/',dataHistory);
       console.log(dataSaveTheQuiz.data);
       JSON.stringify(dataSaveTheQuiz.data);
       sessionStorage.dataSave = JSON.stringify(dataSaveTheQuiz.data)
       dispatch({
           type:Types.SAVE_THE_QUIZ,
           redirect:"finishExam",
           dataSaveTheQuiz:dataSaveTheQuiz.data
       })
   }
    
    // return {
    //     type: Types.CREATE_TEST,
    //     dataCreateTest
    // }
    //     return async dispatch => {
    //         let createQuestion=await Axios('post', '/Api/question/taode',dataCreateTest);
    //         console.log(createQuestion.data);
    //         dispatch({
    //             type: Types.CREATE_TEST,
    //             dataCreateTest,
    //             testQuestion:createQuestion.data,
    //             redirect: true
    //         })
    // }
}