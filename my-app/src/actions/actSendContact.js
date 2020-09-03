import * as Types from './../constants/ActionType';
import { Axios } from '../Utils/Axios';
export const contactFeedback =()=>{
    return {
        type: Types.MOVE_CONTACT,
        contactFeedback:false
    }
}
export const sendContactFeedback = (dataContact) => {
        return async dispatch => {
            let data=await Axios('post', '/Api/contactFeedback',dataContact);
            console.log(data.data);
            dispatch({
                type: Types.SEND_CONTACT,
                contactFeedback:data.data.messageSendContact
            })
    }
}