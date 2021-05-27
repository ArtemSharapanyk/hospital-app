import React from 'react';
import styled from 'styled-components/native';
import { accent} from '../../../styles/colorsApp';
import { DescriptionOfTitle } from '../../helpers/DescriptionOfTitle';
import { Title } from '../../helpers/Title';


export const ClientReceptionInfo = ({fullName, bindedTime, order, avatar,}) => {
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
                        {order}
                    </DescriptionOfTitle>
                </ReceptionBlockClientInfoProblem>
            </ReceptionBlockClientInfo>
            <ReceptionBlockTimeOfMeet>
                {bindedTime}
            </ReceptionBlockTimeOfMeet>
        </ReceptionBlock>
    )
};

const noActiveColor = '#E9F5FF';

const isActiveBtn = (active) => active ? `
    background-color: ${accent};
    color: #fff;
` : `
    background-color: ${noActiveColor};
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
