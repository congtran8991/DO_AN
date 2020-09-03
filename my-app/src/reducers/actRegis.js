import * as types from '../constants/ActionType';
let checkRegis = false;
const actLogin = (state = checkRegis,action)=>{
    console.log(action);
    switch (action.type) {
        case types.ON_REGIS:
            return action.checkRegis;
        case types.ON_ACTNAV:
            return false;    
        default:
           return state;       
    }
}
export default actLogin;