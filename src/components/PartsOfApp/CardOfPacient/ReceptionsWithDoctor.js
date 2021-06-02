import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { ReceptionContext } from '../../../States/Contexts/ReceptionContext';
import { Title } from '../../helpers/Title';
import { Wrapper } from '../../helpers/Wrapper';
import { ReceptionCard } from './ReceptionCard';

export const ReceptionsWithDoctor = ({userId}) => {
    const {getReceptionsOfUser} = useContext(ReceptionContext);



    const renderReceptions = () => {
        const userReception = getReceptionsOfUser(userId);

        if(userReception){
            return userReception.map(data => (
                <ReceptionCard key={data.id} data={data} />
            ))
        }
    };


    return (
        <ReceptionsBlock>
            <Wrapper>
                <TitleOfReceptionBlock >
                    <Title size={18}>
                        Приемы
                    </Title>
                </TitleOfReceptionBlock >
                {renderReceptions()}
            </Wrapper>
        </ReceptionsBlock>
    );
};

const ReceptionsBlock = styled.View`
    width: 100%;
    margin-top: 20px;
    padding-bottom: 20px;
`;

const TitleOfReceptionBlock = styled.Text`
    margin-bottom: 10px;
`;

const ReceptionsList = styled.ScrollView`

`;