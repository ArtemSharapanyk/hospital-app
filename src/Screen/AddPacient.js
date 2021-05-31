import React, { useState } from 'react';
import { Container } from '../components/helpers/Container';
import { Wrapper } from '../components/helpers/Wrapper';
import styled from 'styled-components/native';
import { Input } from '../components/Input/Input';
import { Btn as BaseBtn } from '../components/UI/Btn/Btn';
import { baseBtn } from '../components/UI/Btn/BtnsTypes';
import { Entypo as PlusIcon } from '@expo/vector-icons'; 
import { accentGreen } from '../styles/colorsApp';
import { BtnBoxWithContent, BtnWithMargin, FormBlock, TextBtnBox } from '../components/helpers/FormBlock';


export const AddPacient = () => {
    const [userNameData, changeUserName]   = useState('');
    const [userPhoneData, changeUserPhone] = useState(''); 

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

