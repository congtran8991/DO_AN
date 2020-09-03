import * as types from './../constants/ActionType'
let dataChart = [];
const dataShowChart = (state = dataChart, action) => {
    console.log(action);
    switch (action.type) {
        case types.SHOW_CHART:
            return action.dataChart;
        default:
            return state;
    }
}
export default dataShowChart;