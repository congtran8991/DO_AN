import * as types from "../constants/ActionType";
let checkLogin = "";
const actLogin = (state = checkLogin, action) => {
  console.log(action);
  switch (action.type) {
    case types.ON_LOGIN:
      return action.checkLogin;
    default:
      return state;
  }
};
export default actLogin;
