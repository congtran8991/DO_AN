import * as Types from '../constants/ActionType';
import { Axios } from '../Utils/Axios';
export const actShowChart =(data)=>{
    return async dispatch => {
        let showchart=await Axios('post', '/Api/saveTheQuiz/showChart',data);
        // let endTime = new Date(showchart.data[showchart.data.length-1].time_test).getTime();
        // let beginfive = new Date(showchart.data[showchart.data.length-1].time_test);
        // beginfive.setDate(beginfive.getDate() - 5);
        // let beginfiveTime = new Date(beginfive).getTime();
        // let dataCmt = showchart.data.filter((timedata,index)=>{
        //     let dataTime = new Date(timedata.time_test).getTime();
        //     return dataTime >= beginfiveTime && dataTime<= endTime;
        // })
        console.log(showchart.data);
        let dataLabel = showchart.data.map((label,index)=>{
            return {label:label.madethi}
        })
        let dataValue = showchart.data.map((label,index)=>{
            return {value:label.phamtramdiem}
        })
        dispatch({
            type: Types.SHOW_CHART,
            dataLabelChart:dataLabel,
            dataValueChart:dataValue,
            dataChart : showchart.data
        })
}
}