import * as types from '../constants/ActionType';
let onLogout = false;
const actLogin = (state = onLogout,action)=>{
    switch (action.type) {
        case types.ON_LOGOUT:
            return action.onLogout;
        default:
           return state;       
    }
}
export default actLogin;