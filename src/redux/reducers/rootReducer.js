import { combineReducers } from "redux";
import { receptionReducer } from "../Reception/receptionReducer";

export const rootReducer = combineReducers({
    reception: receptionReducer
});