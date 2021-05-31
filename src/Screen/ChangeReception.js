import React, { useState } from 'react';
import { Container } from '../components/helpers/Container';
import { BtnBoxWithContent, BtnWithMargin, FormBlock, TextBtnBox } from '../components/helpers/FormBlock';
import { Btn as BaseBtn } from '../components/UI/Btn/Btn';
import { InputGroup } from '../components/Input/InputGroup';
import { accent } from '../styles/colorsApp';
import { baseBtn } from '../components/UI/Btn/BtnsTypes';
import { Input } from '../components/Input/Input';
import { Wrapper } from '../components/helpers/Wrapper';
import { Ionicons as Mark } from '@expo/vector-icons'; 



export const ChangeReception = () => {
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
                        <BaseBtn type={baseBtn} bg={accent} volume={{width: '100%'}}>
                            <BtnBoxWithContent >
                                <Mark name="checkmark" size={20} color="white" />
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





