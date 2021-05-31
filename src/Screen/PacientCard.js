import React from 'react';
import { Container } from '../components/helpers/Container';
import { CardBaseInfo } from '../components/PartsOfApp/CardOfPacient/CardBaseInfo';
import { ReceptionsWithDoctor } from '../components/PartsOfApp/CardOfPacient/ReceptionsWithDoctor';
import {pacientCardBg } from '../styles/colorsApp';


export const PacientCard = ({route}) => {
    return (
        <Container bg={pacientCardBg}>
            <CardBaseInfo data={route.params} />
            <ReceptionsWithDoctor userId={route.params.userId} />
        </Container>
    )
};




