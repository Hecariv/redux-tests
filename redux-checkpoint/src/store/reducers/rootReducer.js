import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";
import { combineReducers } from "redux";

export default combineReducers({
    postsRed: postsReducer,
    commentsRed: commentsReducer,
})