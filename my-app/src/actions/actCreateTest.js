import * as Types from './../constants/ActionType';
import { Axios } from '../Utils/Axios';
export const actCreateTest = (dataCreateTest) => {
    // return {
    //     type: Types.CREATE_TEST,
    //     dataCreateTest
    // }
        return async dispatch => {
            let createQuestion=await Axios('post', '/Api/question/taode',dataCreateTest);
            sessionStorage.dataChuong = JSON.stringify(dataCreateTest.chapterTest);
            console.log(createQuestion.data);
            console.log(dataCreateTest);
            dispatch({
                type: Types.CREATE_TEST,
                dataCreateTest,
                testQuestion:createQuestion.data,
                redirect: "test"
            })
    }
}