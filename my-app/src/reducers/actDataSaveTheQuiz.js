import * as types from './../constants/ActionType'
let dataSaveTheQuiz = '';
const timeExamData = (state = dataSaveTheQuiz, action) => {
    console.log(action);
    switch (action.type) {
        case types.SAVE_THE_QUIZ:
            return action.dataSaveTheQuiz;
        default:
            return state;
    }
}
export default timeExamData;