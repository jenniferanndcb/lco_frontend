import { combineReducers } from "redux";
import localAuthData from "./localAuthData";
import programmes from "./programmes";

export default combineReducers({
  localAuthData,
  programmes,
});
