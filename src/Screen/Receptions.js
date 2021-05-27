import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { Container } from '../components/helpers/Container';
import { Wrapper } from '../components/helpers/Wrapper';
import { ReceptionByData } from '../components/PartsOfApp/Reception/ReceptionByData';
import { Btn as ReceptionBtn } from '../components/UI/Btn/Btn';
import { ReceptionContext } from '../States/Contexts/ReceptionContext';
import { mainBg } from '../styles/colorsApp';



export const Receptions = () => {
    const {receptions} = useContext(ReceptionContext);
    
    const renderReceptionsBlocks = () => {
        if(!receptions.length){
            return  (
                <EmptyReceptionsMessage>
                    It hasn't had any receptions
                </EmptyReceptionsMessage>
            );
        }else{
            return receptions.map(({date, receptions}) => (
                <ReceptionByData
                    key={date}
                    date={date}
                    receptions={receptions}
                />
            ));
        }
    };

    return (
        <Container bg={mainBg}>
            <Wrapper>
                <ScrollView>
                    {renderReceptionsBlocks()}
                </ScrollView>
            </Wrapper>
            <ReceptionBtn/>
        </Container>

    )
};

const EmptyReceptionsMessage = styled.Text`

`;