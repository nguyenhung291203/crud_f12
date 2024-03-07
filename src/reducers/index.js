import { combineReducers } from "redux";
import customerReducer from "./CustomerReducer";

export default combineReducers({
    customers: customerReducer
})