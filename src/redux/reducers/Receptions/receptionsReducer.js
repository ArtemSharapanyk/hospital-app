import { UPLOAD_RECEPTIONS } from "../../actionsTypes";

const initialState = {
    allReceptions: null
};

export const receptionsReducer = (state =  initialState, {type, payload}) => {
    switch(type){
        case UPLOAD_RECEPTIONS:
            return {
                ...state, allReceptions: payload
            }
        default:
            return state;
    }
};