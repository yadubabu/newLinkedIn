import { combineReducers } from "redux";
import userReducers from "./userReducer";

const reducers = combineReducers({
  userState: userReducers,
});

export default reducers;
