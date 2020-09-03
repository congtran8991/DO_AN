import * as types from './../constants/ActionType'
let timeExam = '';
const timeExamData = (state = timeExam, action) => {
    console.log(action);
    switch (action.type) {
        case types.CREATE_TEST:
            return action.dataCreateTest.timeTest ;
        default:
            return state;
    }
}
export default timeExamData;