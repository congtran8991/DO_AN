import * as Types from './../constants/ActionType';
import { Axios } from '../Utils/Axios';
import {setCookie} from '../Utils/dataSetCookie';
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires" + d.toUTCString();
//     console.log(expires);
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
export const actLogin = (account) => {
    // return {
    //     type: Types.CREATE_TEST,
    //     dataCreateTest
    // }
    console.log(account);
        return async dispatch => {
            let dataLogin=await Axios('post','/Api/loginUser',account);
            let {token,user,success} = dataLogin.data;
            console.log(dataLogin.data);
            if(success==true){
                setCookie('token', token, 1);
                setCookie('username', user, 1);
                dispatch({
                    type:Types.ON_LOGIN,
                    checkLogin:success
                 })
            }else{
                dispatch({
                    type:Types.ON_LOGIN,
                    checkLogin:success
                })
            }
    }
}