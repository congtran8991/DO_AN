import * as Types from './../constants/ActionType';
import { Axios } from '../Utils/Axios';
import { setCookie } from '../Utils/dataSetCookie';
export const updatePass = (dataAccount) => {
    // return async dispatch => {
    //     let data=await Axios('put','/Api/loginUser/updatePass',dataAccount);
    //     if(data.data.message==true){
    //         alert('Đổi mật khẩu thành công');
    //     }
    //     dispatch({
    //         type: Types.ON_UPDATE_ACCOUNT,
    //         updatePass: data.data.message
    //     })
    // }
    return {
        type: Types.ON_UPDATE_ACCOUNT,
        updatePass: dataAccount
    }
}