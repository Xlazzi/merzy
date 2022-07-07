import { combineReducers } from "redux";
import productReducer from "./productReducer";

const allReducer = combineReducers({
    productReducer
});
export default allReducer;