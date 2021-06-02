import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ADD_USER, CHANGE_RECEPTION_DATA } from "../../redux/actionsTypes";
import { UserContext } from "../Contexts/UserContext";

export const UserState = ({children}) => {
    const {users}  = useSelector(state => state.Users);
    const dispatch = useDispatch();
    
    const changeReceptionData = payload => {
        dispatch({
            type: CHANGE_RECEPTION_DATA,
            payload
        });
    };


    const addUser = data => {
        dispatch({
            type: ADD_USER,
            payload: [...users, data]
        });

        console.log(users);
    };

    return (
        <UserContext.Provider value={{
            changeReceptionData,
            users,
            addUser
        }}>
            {children}
        </UserContext.Provider>
    )
};