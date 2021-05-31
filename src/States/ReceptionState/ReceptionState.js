import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_RECEPTIONS } from '../../redux/actionsTypes';
import { ReceptionContext } from "../Contexts/ReceptionContext";

export const ReceptionState = ({children}) => {
    const {users} = useSelector(state => state.Users);
    const {allReceptions} = useSelector(state => state.Receptions);

    const dispatch = useDispatch();

    const getReceptions = () => {
        const receptions = {};
        
        users.forEach(user => {
            user.receptions.forEach((reception, index) => {
                const dateValue = reception.date;
                const pushedData = {
                    ...reception, 
                    avatar: user.avatar,
                    fullName: user.fullName,
                    phoneNumber: user.phoneNumber,
                    userId: user.id,
                    key: user.id
                };
    
                if(dateValue in receptions){
                    receptions[dateValue] = [...receptions[dateValue], pushedData];
                }else{
                    receptions[dateValue] = [pushedData]
                }
            });
        });

        const receptionsInArray = Object.keys(receptions).map(date => {
            return {
                date,
                receptions: receptions[date]
            };
        });


        dispatch({
            type: UPLOAD_RECEPTIONS,
            payload: receptionsInArray
        });
    };

    const getReceptionsOfUser = userId => {
        return users.find(({id}) => id === userId).receptions;
    };

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
            allReceptions,
            getReceptions,
            getReceptionsOfUser,
        }}>
            {children}
        </ReceptionContext.Provider>
    )
}