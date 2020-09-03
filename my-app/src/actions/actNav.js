import * as Types from './../constants/ActionType';
export const actNav = (option) => {
       return {
           type:Types.ON_ACTNAV,
           onNav:option
       }
}