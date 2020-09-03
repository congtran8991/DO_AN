import * as Types from './../constants/ActionType';
export const actLogout = () => {
       return {
           type:Types.ON_LOGOUT,
           onLogout:true
       }
}