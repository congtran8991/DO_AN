import * as Types from './../constants/ActionType';
import { Axios } from '../Utils/Axios';
import { setCookie } from '../Utils/dataSetCookie';
export const onRegisUser = (data) => {
    return async dispatch => {
        let dataRegis = await Axios('post', '/Api/loginUser/regis', data);
        console.log(dataRegis.data);
        dispatch({
            type: Types.ON_REGIS,
            checkRegis: dataRegis.data
        })
        // if(success==true){
        //     dispatch({
        //         type:Types.ON_LOGIN,
        //         checkLogin:success
        //      })
        // }else{
        //     dispatch({
        //         type:Types.ON_LOGIN,
        //         checkLogin:success
        //     })
        // }
    }
}