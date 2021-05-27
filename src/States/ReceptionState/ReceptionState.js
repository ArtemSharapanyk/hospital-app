import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ReceptionContext } from "../Contexts/ReceptionContext";

export const ReceptionState = ({children}) => {
    const {receptions} = useSelector(state => state.reception);
    const dispatch = useDispatch();

    const craeteReception = () => {

    };

    const removeReception = () => {

    };

    const changeReception = () => {

    };

    return (
        <ReceptionContext.Provider value={{
            craeteReception, 
            removeReception,
            changeReception,
            receptions
        }}>
            {children}
        </ReceptionContext.Provider>
    )
}