import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { DescriptionOfTitle } from '../../helpers/DescriptionOfTitle';
import { Title } from '../../helpers/Title';
import { Wrapper } from '../../helpers/Wrapper';
import { Btn } from '../../UI/Btn/Btn';
import { baseBtn, callBtn } from '../../UI/Btn/BtnsTypes';

export const CardBaseInfo = ({data}) => {
    const {fullName, phoneNumber} = data;

    return (
        <BaseInfoAboutUser>
                <Wrapper>
                    <Title size={28}>
                        {fullName}
                    </Title>
                    <NumberInfo>
                        <DescriptionOfTitle size={15} >
                            {phoneNumber}
                        </DescriptionOfTitle>
                    </NumberInfo>
                    <BtnBox>
                        <Btn type={baseBtn}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 15
                            }}>
                                Формула зубов
                            </Text>
                        </Btn>
                        <Btn type={callBtn} />
                    </BtnBox>
                </Wrapper>
            </BaseInfoAboutUser>
    );
};



const BaseInfoAboutUser = styled.View`
    width: 100%;
    background-color: #fff;
    padding:10% 0;
`;

const NumberInfo = styled.View`
    margin-top: 2px;
`

const BtnBox = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin-top: 20px;
`;
