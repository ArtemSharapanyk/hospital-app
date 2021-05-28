import React from 'react';
import styled from 'styled-components/native';
import { accent } from '../../../styles/colorsApp';
import { AntDesign as PlusIcon } from '@expo/vector-icons'; 
import { navigationBtnBack, receptionBtn } from './BtnsTypes';
import { AntDesign as BackIcon } from '@expo/vector-icons'; 

export const Btn = ({children, type = receptionBtn, onTouch}) => {
    if(type === receptionBtn){
        return (
            <ButtonReception activeOpacity={0.9} style={ButtonReceptionShadow} >
                <PlusIcon name="plus" size={24} color="white" />
            </ButtonReception>
        )
    }

    if(type === navigationBtnBack){
        return (
            <ButtonNavigationBack onPress={onTouch}>
                <BackIcon name="left" size={24} color={accent} />
            </ButtonNavigationBack>
        )
    }
};

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

const ButtonNavigationBack = styled.TouchableOpacity`
    width: 100%;
    align-items: flex-end;
    margin-left: 5px;
`;


