import { combineReducers } from "redux";
import userReducer from "./user";
import questionReducer from "./question";
import authReducer from "./auth";

export default combineReducers({
  questions: questionReducer,
  users: userReducer,
  authedUser: authReducer,
});
