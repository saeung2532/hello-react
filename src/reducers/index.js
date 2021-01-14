import { combineReducers } from "redux";
import companyReducer from "./company.reducer";
import loginReducer from "./login.reducer";
import prheadReducer from "./prhead.reducer";
import prnumberReducer from "./prnumber.reducer";

export default combineReducers({
  companyReducer,
  loginReducer,
  prheadReducer,
  prnumberReducer,
});
