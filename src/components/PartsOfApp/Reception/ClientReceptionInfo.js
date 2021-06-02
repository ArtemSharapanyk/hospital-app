import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { accent, lightGreyDecoratedColor} from '../../../styles/colorsApp';
import { DescriptionOfTitle } from '../../helpers/DescriptionOfTitle';
import { Title } from '../../helpers/Title';
import { EvilIcons as PenIcon} from '@expo/vector-icons'; 
import { Ionicons as CloseIcon} from '@expo/vector-icons'; 


export const ClientReceptionInfo = ({fullName, bindedTime, diagnose, avatar,}) => {
    return (
        <ReceptionBlock>
            <ReceptionBlockAvatar source={{
                uri: avatar
            }} />
            <ReceptionBlockClientInfo>
                <Title size={18}>
                    {fullName}
                </Title>
                <ReceptionBlockClientInfoProblem>
                    <DescriptionOfTitle size={17}>
                        {diagnose}
                    </DescriptionOfTitle>
                </ReceptionBlockClientInfoProblem>
            </ReceptionBlockClientInfo>
            <ReceptionBlockTimeOfMeet>
                {bindedTime}
            </ReceptionBlockTimeOfMeet>
        </ReceptionBlock>
    )
};


export const HiddenItemWithActions = ({rowMap,data,deleteReception,changeReception}) => {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 15

        }}>
            <ChangeBtn activeOpacity={0.6} onPress={changeReception}>
                <PenIcon name="pencil" size={20} color="white" />
            </ChangeBtn>
            <DeleteBtn onPress={deleteReception}>
                <CloseIcon activeOpacity={0.6} name="close" size={20} color="white" />
            </DeleteBtn>
        </View>
    );
}



const isActiveBtn = (active) => active ? `
    background-color: ${accent};
    color: #fff;
` : `
    background-color: ${lightGreyDecoratedColor};
    color: ${accent}
`; 

const ReceptionBlock = styled.View`
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    padding-bottom: 20px;
    border-bottom-color: #F3F3F3;
    border-bottom-width: 1px;
    border-style: solid;
    background-color: #fff;
    padding-right: 10px;
`;

const DeleteBtn = styled.TouchableOpacity`
    width: 80px;
    height: 70px;
    background-color: #F85A5A;
    color: #fff;
    align-items: center;
    justify-content: center;
`;

const ChangeBtn = styled.TouchableOpacity`
    width: 80px;
    height: 70px;
    background-color: #B4C1CB;
    color: #fff;
    align-items: center;
    justify-content: center;
`;

const widthHeigOfAvatar = 40;

const ReceptionBlockAvatar = styled.Image`
    width: ${widthHeigOfAvatar}px ;
    height: ${widthHeigOfAvatar}px;
    border-radius: ${widthHeigOfAvatar / 2}px;
`;

const ReceptionBlockTimeOfMeet = styled.Text`
    ${({active}) => isActiveBtn(active)}
    padding: 8px 18px;
    border-radius: 20px;
    font-weight: bold;
`;

const ReceptionBlockClientInfo = styled.View`
    width: 60%;
    height: 100%;
`;

const ReceptionBlockClientInfoProblem = styled.View`
    margin-top: 3px;
`;
