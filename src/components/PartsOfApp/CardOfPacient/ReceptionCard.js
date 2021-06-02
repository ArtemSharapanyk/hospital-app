import React from 'react';
import styled from 'styled-components';
import { FontAwesome5 as Tooth } from '@expo/vector-icons';
import { accent, boldGreenColor, greenDecorated, greyDecorated } from '../../../styles/colorsApp';
import { CardHelperPropertyValue } from '../../helpers/CardHelperPropertyValue';
import { Btn as ModalBtn } from '../../UI/Btn/Btn';
import { modalBtn } from '../../UI/Btn/BtnsTypes';
import { Foundation as NoteIcon } from '@expo/vector-icons'; 

export const ReceptionCard = ({data}) => {
    const {numberOfTooth, date,diagnose, bindedTime,price} = data;

    console.log(data)

    return (
        <ReceptionCardBlock style={ReceptionCardBlockShadow}>
            <CardHelperPropertyValue first property={'Зуб'} value={numberOfTooth}>
                <Tooth name="tooth" size={15} color={greyDecorated} />
            </CardHelperPropertyValue>
            <CardHelperPropertyValue property={'Диагноз'} value={diagnose} >
            <NoteIcon name="clipboard-notes" size={15} color={greyDecorated} />
            </CardHelperPropertyValue>
            <TimeAndPriceBlock>
                <DecoratedCircle width={'65%'} bg={accent}>
                    <DecoratedCircleText color={'#fff'}>
                        {date} - {bindedTime}
                    </DecoratedCircleText>
                </DecoratedCircle>
                <DecoratedCircle width={'30%'} bg={greenDecorated}>
                    <DecoratedCircleText color={boldGreenColor}>
                        {price}
                    </DecoratedCircleText>
                </DecoratedCircle>
            </TimeAndPriceBlock>
            <MoreBtn>
                <ModalBtn type={modalBtn} color={greyDecorated} size={20} />
            </MoreBtn>
        </ReceptionCardBlock>
    );
};


const ReceptionCardBlockShadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    
    elevation: 1,
}

const ReceptionCardBlock = styled.View`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    margin-top: 15px;
`;

const DecoratedCircle = styled.View`
    padding: 8px 15px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: ${({bg}) => bg};
    width: ${({width}) => width};
`;

const DecoratedCircleText = styled.Text`
    color: ${({color}) => color} ;
    font-weight: bold;
    font-size: 15px;
`;

const TimeAndPriceBlock = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 15px;
`;

const MoreBtn = styled.View`
    position: absolute;
    right: 5%;
    top:15%;
`;


