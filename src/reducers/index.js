import { combineReducers } from "redux";
import companyReducer from "./company.reducer";
import loginReducer from "./login.reducer";
import prheadReducer from "./prhead.reducer";

export default combineReducers({
  companyReducer,
  loginReducer,
  prheadReducer,
});
