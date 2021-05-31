import React, { useState } from 'react';
import { Container } from '../components/helpers/Container';
import { Wrapper } from '../components/helpers/Wrapper';
import { Ionicons as Mark } from '@expo/vector-icons'; 
import { Input } from '../components/Input/Input';
import { Btn as BaseBtn } from '../components/UI/Btn/Btn';
import { baseBtn } from '../components/UI/Btn/BtnsTypes'; 
import { accentGreen } from '../styles/colorsApp';
import { BtnBoxWithContent, BtnWithMargin, FormBlock, TextBtnBox } from '../components/helpers/FormBlock';


export const ChangePacient = () => {
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
                            <Mark name="checkmark" size={20} color="white" />
                                <TextBtnBox>
                                    Сохранить  
                                </TextBtnBox>
                            </BtnBoxWithContent>
                        </BaseBtn>
                    </BtnWithMargin>
                </FormBlock>    
            </Wrapper>
        </Container>
    )

};

