import React from 'react';
import styled from 'styled-components/native';
import { accent, accentGreen } from '../../../styles/colorsApp';
import { AntDesign as PlusIcon } from '@expo/vector-icons'; 
import { baseBtn, callBtn, modalBtn, navigationBtnBack, receptionBtn } from './BtnsTypes';
import { AntDesign as BackIcon } from '@expo/vector-icons'; 
import { Ionicons as CallIcon } from '@expo/vector-icons'; 
import { Entypo as Dots} from '@expo/vector-icons'; 

export const Btn = (
        {
            children,
            type = receptionBtn,
            onTouch,
            volume = {},
            bg = accent,
            paddingVertical,
            color,
            size
        }
    ) => {
    if(type === receptionBtn){
        return (
            <ButtonReception activeOpacity={0.9} onPress={onTouch} style={ButtonReceptionShadow} >
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

    if(type === callBtn){
        const {width, height} = volume;
        const defaultVolume = 45; 

        return (
            <ButtonCall width={width || defaultVolume} activeOpacity={0.8} height={height || defaultVolume} >
                <CallIcon name="ios-call" size={16} color="white" />
            </ButtonCall>
        )
    }

    if(type === baseBtn){
        const paddingDefault = 12;
        const {width} = volume;
        const defaultWidth = '85%'

        return (
            <BaseBtn 
                bg={bg}
                width={width || defaultWidth}
                paddingVertical={paddingVertical || paddingDefault}
                activeOpacity={0.8}
            >
                {children}
            </BaseBtn>
        )
    }

    if(type === modalBtn){
        return (
            <ModalBtn>
                <Dots name="dots-three-vertical" size={size} color={color} />
            </ModalBtn>
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

const ButtonCall = styled.TouchableOpacity`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    background-color: ${accentGreen};
    border-radius: ${({width}) => width / 2}px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const BaseBtn = styled.TouchableOpacity`
    width: ${({width}) => width};
    padding: ${({paddingVertical}) => paddingVertical + 'px' + ' 0'};
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background-color: ${({bg}) => bg};
`;

const ModalBtn = styled.TouchableOpacity`

`;


