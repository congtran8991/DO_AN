import * as types from './../constants/ActionType'
let testQuestion = [];
const product = (state = testQuestion, action) => {
    console.log(action.testQuestion);
    switch (action.type) {
        case types.CREATE_TEST:
            return action.testQuestion ;
        default:
            return state;
    }
}
export default product;