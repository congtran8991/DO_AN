import * as types from './../constants/ActionType'
// var data=JSON.parse(locaStorage.getItem('CART'))
let dataCreateTest = [];
const product = (state = dataCreateTest, action) => {
    console.log(action.dataCreateTest);
    
    switch (action.type) {
        case types.CREATE_TEST:
            return {...action.dataCreateTest}
        default:
            return state;
    }
}
export default product;