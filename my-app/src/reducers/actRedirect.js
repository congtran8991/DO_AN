import * as types from './../constants/ActionType'
let redirect = "";
const product = (state = redirect, action) => {
    switch (action.type) {
        case types.CREATE_TEST:
            return action.redirect;
        case types.SAVE_THE_QUIZ:
            return action.redirect;    
        default:
            return state;
    }
}
export default product;