import { combineReducers } from "redux";
import companyReducer from "./company.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({
  companyReducer,
  loginReducer,
});
