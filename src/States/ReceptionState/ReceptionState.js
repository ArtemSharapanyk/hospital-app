import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_RECEPTIONS } from '../../redux/actionsTypes';
import { ReceptionContext } from "../Contexts/ReceptionContext";
import { UserContext } from '../Contexts/UserContext';

export const ReceptionState = ({children}) => {
    const {users, changeReceptionData} = useContext(UserContext);
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



    const createReception = (userPhoneNumber, data) => {
        try{
            const arrayWithoutUser = users.filter(({phoneNumber}) => phoneNumber !== userPhoneNumber);
            const userWhichWillChange = users.find(({phoneNumber}) => phoneNumber === userPhoneNumber);
            
            userWhichWillChange.receptions.push(data);

            changeReceptionData([...arrayWithoutUser, userWhichWillChange]);

            getReceptions();
        }catch(e){
            alert('Пользователь не базе')
        }
    };

    const removeReception = (userId, receptionId) => {
        const arrayWithoutUser = users.filter(({id}) => id !== userId);
        const userWhichWillChange = users.find(({id}) => id === userId);
        
        userWhichWillChange.receptions = userWhichWillChange.receptions.filter(({id}) => id  !== receptionId);
        

        changeReceptionData([...arrayWithoutUser, userWhichWillChange]);
        getReceptions();
    };

    const changeReception = (receptionId, userId, data) => {
        const arrayWithoutUser = users.filter(({id}) => id !== userId);
        const userWhichWillChange = users.find(({id}) => id === userId);
            
        const receptionsOfUserWithoutChanged =  userWhichWillChange.receptions.filter(({id}) => id !== receptionId);

        userWhichWillChange.receptions = [...receptionsOfUserWithoutChanged, data];

        changeReceptionData([...arrayWithoutUser, userWhichWillChange]);

        getReceptions();
    };  

    return (
        <ReceptionContext.Provider value={{
            removeReception,
            changeReception,
            allReceptions,
            getReceptions,
            getReceptionsOfUser,
            createReception
        }}>
            {children}
        </ReceptionContext.Provider>
    )
}