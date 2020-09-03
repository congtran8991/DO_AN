import * as types from './../constants/ActionType'
let dataValue = [{value:0}];
const lableChart = (state = dataValue, action) => {
    console.log(action);
    switch (action.type) {
        case types.SHOW_CHART:
            return action.dataValueChart;
        default:
            return state;
    }
}
export default lableChart;