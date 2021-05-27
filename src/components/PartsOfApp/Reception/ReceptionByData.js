import React from 'react';
import {TouchableOpacity, View} from 'react-native'
import { Title as DateTitle} from "../../helpers/Title";
import styled from 'styled-components/native';
import { ClientReceptionInfo } from './ClientReceptionInfo';

export const ReceptionByData = ({date, receptions}) => {

    // const sortArrayToNearerByTime = () =>{
    //     const timeInMinutes        = new Date().getMinutes() + (new Date().getHours() * 60)
    //     const takeHours   = bindedTime => bindedTime.split('.')[0];
    //     const takeMinutes = bindedTime => bindedTime.split('.')[1];

    //     const countOfSort = 60 * 3;


    //     return fakeArray.filter(({bindedTime}) => {
    //         const bindedTimeMinutesOnly = (+takeHours(bindedTime * 60) + (+takeMinutes(bindedTime)));

    //         if(time - bindedTimeInHoursOnly > 0 && time - bindedTimeInHoursOnly > bindedTimeInHoursOnly + 3){
    //             return true
    //         }
    //     });
    // };

    // sortArrayToNearerByTime()



    const renderReceptions = () => {
        return receptions.map(({fullName, bindedTime, order, avatar, id}) => (
            <TouchableOpacity key={id}>
                <ClientReceptionInfo 
                    fullName={fullName}
                    bindedTime={bindedTime}
                    order={order}
                    avatar={avatar}
                />
            </TouchableOpacity>
        ))
    };

    return (
        <View style={{paddingTop: 20}}>
            <DateTitle>
                {date}
            </DateTitle>
            <ListBlock>
                {renderReceptions()}
            </ListBlock>
        </View>
    )
};

const ListBlock = styled.View`
    width: 100%;
    margin-top: 20px;
`;


