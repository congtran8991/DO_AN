import * as types from '../constants/ActionType';
let checkNav = 'login';
const actLogin = (state = checkNav,action)=>{

    switch (action.type) {
        case types.ON_ACTNAV:
            return action.onNav;
        default:
           return state;       
    }
}
export default actLogin;