import React, { useContext, useEffect } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { navigationRoutes } from '../../App';
import { ReceptionByData } from '../components/PartsOfApp/Reception/ReceptionByData';
import { Btn as ReceptionBtn } from '../components/UI/Btn/Btn';
import { ReceptionContext } from '../States/Contexts/ReceptionContext';
import { mainBg } from '../styles/colorsApp';
import { Container } from '../components/helpers/Container';
import { Wrapper } from '../components/helpers/Wrapper';




export const Receptions = ({navigation}) => {
    const {allReceptions, getReceptions} = useContext(ReceptionContext);

    useEffect(() => {
        getReceptions();
    }, []);



    const renderReceptionsBlocks = () => {
        if(allReceptions){

            if(!allReceptions.length){
                return  (
                    <EmptyReceptionsMessage>
                        It hasn't had any receptions
                    </EmptyReceptionsMessage>
                );
            }else{
                return allReceptions.map(({date,receptions}) => (
                    <ReceptionByData
                        key={date}
                        date={date}
                        receptions={receptions}
                        navigationObject={navigation}
                    />
                ));
            }
        }
    };

    return (
        <Container bg={mainBg}>
            <ScrollView>
                <Wrapper>
                    {renderReceptionsBlocks()}
                </Wrapper>
            </ScrollView>
            <ReceptionBtn onTouch={navigation.navigate.bind(this, navigationRoutes.addReception.route)} />
        </Container>

    )
};

const EmptyReceptionsMessage = styled.Text`

`;