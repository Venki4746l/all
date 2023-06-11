import { combineReducers } from "redux";
import LoginReducer from "./Reducers/LoginReducer";
import todoReducer from './Reducers/CrudREducer'
const rootReducer = combineReducers({
  todos:todoReducer,
  login: LoginReducer,
});
export default rootReducer
