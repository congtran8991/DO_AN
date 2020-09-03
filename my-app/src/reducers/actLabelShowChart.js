import * as types from './../constants/ActionType'
let dataLabel = [{label:""}];
const lableChart = (state = dataLabel, action) => {
    console.log(action);
    switch (action.type) {
        case types.SHOW_CHART:
            return action.dataLabelChart;
        default:
            return state;
    }
}
export default lableChart;