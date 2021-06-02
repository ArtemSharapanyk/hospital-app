import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '../components/helpers/Container';
import { CardBaseInfo } from '../components/PartsOfApp/CardOfPacient/CardBaseInfo';
import { ReceptionsWithDoctor } from '../components/PartsOfApp/CardOfPacient/ReceptionsWithDoctor';
import {pacientCardBg } from '../styles/colorsApp';


export const PacientCard = ({route}) => {
    return (
        <Container bg={pacientCardBg} >
            <ScrollView>
                <CardBaseInfo data={route.params} />
                <ReceptionsWithDoctor userId={route.params.userId} />
            </ScrollView>
        </Container>
    )
};




