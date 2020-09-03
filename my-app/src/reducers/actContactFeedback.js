import * as types from './../constants/ActionType'
let checkSaveContent = false;
const contactFeedback = (state = checkSaveContent, action) => {
    console.log(action);
    switch (action.type) {
        case types.SEND_CONTACT:
            return action.contactFeedback;
        case types.MOVE_CONTACT:
            return action.contactFeedback;
        default:
            return state;
    }
}
export default contactFeedback;