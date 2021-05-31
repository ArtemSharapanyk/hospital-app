import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Container } from '../components/helpers/Container';
import { BtnBoxWithContent, BtnWithMargin, FormBlock, TextBtnBox } from '../components/helpers/FormBlock';
import { Wrapper } from '../components/helpers/Wrapper';
import { Input } from '../components/Input/Input';
import { Btn as BaseBtn } from '../components/UI/Btn/Btn';
import { baseBtn } from '../components/UI/Btn/BtnsTypes';
import { Entypo as PlusIcon } from '@expo/vector-icons'; 
import { accentGreen } from '../styles/colorsApp';
import { InputGroup } from '../components/Input/InputGroup';

export const AddReception = () => {
    const [userNameData, changeUserName]   = useState('');
    const [userPhoneData, changeUserPhone] = useState('');
    const [dateOfReception, changeDate]    = useState('');
    const [priceOfReception, changePrice]  = useState('');

    return (
        <Container bg={'#fff'}>
            <Wrapper>
                <FormBlock>
                    <Input 
                        first
                        value={userNameData}
                        changeValue={changeUserName}
                        label={'Имя и фамилия'}
                    />
                    <Input
                        value={userPhoneData}
                        changeValue={changeUserPhone}
                        label={'Номер'}
                    />

                    <InputGroup
                        firtsControl={[dateOfReception, changeDate]}
                        secondControl={[priceOfReception, changePrice]}
                        placeholder={['Дата', 'Цена']}
                        fontSize={15}
                    />
                    <BtnWithMargin>
                        <BaseBtn type={baseBtn} bg={accentGreen} volume={{width: '100%'}}>
                            <BtnBoxWithContent >
                                <PlusIcon name="plus" size={24} color="white" />
                                <TextBtnBox>
                                    Добавить 
                                </TextBtnBox>
                            </BtnBoxWithContent>
                        </BaseBtn>
                    </BtnWithMargin>
                </FormBlock>    
            </Wrapper>
        </Container>
    )
};






