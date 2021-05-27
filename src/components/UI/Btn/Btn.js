import React from 'react';
import styled from 'styled-components/native';
import { accent } from '../../../styles/colorsApp';
import { AntDesign } from '@expo/vector-icons'; 

const receptionBtn = 'reception';


export const Btn = ({children, type = receptionBtn}) => {
    if(type === receptionBtn){
        return (
            <ButtonReception activeOpacity={0.9} style={ButtonReceptionShadow} >
                <AntDesign name="plus" size={24} color="white" />
            </ButtonReception>
        )
    }
};

const ButtonReception = styled.TouchableOpacity`
    width: 64px;
    height: 64px;
    border-radius: ${64 / 2}px;
    background-color: ${accent};
    color: #fff;
    justify-content: center;
    align-items: center;
    position: absolute;
    right:3%;
    bottom: 3%;
`;

const ButtonReceptionShadow = {
    shadowColor: accent,
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 10,
};
