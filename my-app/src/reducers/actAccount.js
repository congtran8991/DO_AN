import * as types from '../constants/ActionType';
let checkUpdate = false;
const actAccount = (state = checkUpdate,action)=>{
    switch (action.type) {
        case types.ON_UPDATE_ACCOUNT:
            return action.updatePass;
        default:
           return state;       
    }
}
export default actAccount;