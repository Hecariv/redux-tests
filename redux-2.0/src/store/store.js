import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger"

export default () => createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))
