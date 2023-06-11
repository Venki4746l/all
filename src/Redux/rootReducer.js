import { combineReducers } from "redux";
import LoginReducer from "./Reducers/LoginReducer";
const rootReducer = combineReducers({
  login: LoginReducer,
});
export default rootReducer
