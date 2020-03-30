import { combineReducers } from "redux";
import postcodes from "./postcodes";
import londonData from "./londonData";

export default combineReducers({
  postcodes,
  londonData
});
