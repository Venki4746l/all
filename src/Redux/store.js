import { applyMiddleware, createStore } from "redux";
import rootReducer from './rootReducer';
import thunk from "redux-thunk"
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
const middleware=[thunk]

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware,logger)))
export default store