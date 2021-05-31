import { combineReducers } from "redux";
import { receptionsReducer } from "./Receptions/receptionsReducer";
import { usersReducer } from "./Users/usersReducer";

export const rootReducer = combineReducers({
    Users: usersReducer,
    Receptions: receptionsReducer
});