import React, { useContext, useState } from 'react';
import { Container } from '../components/helpers/Container';
import { Wrapper } from '../components/helpers/Wrapper';
import { Input } from '../components/Input/Input';
import { Btn as BaseBtn } from '../components/UI/Btn/Btn';
import { baseBtn } from '../components/UI/Btn/BtnsTypes';
import { Entypo as PlusIcon } from '@expo/vector-icons'; 
import { accentGreen, mainBg } from '../styles/colorsApp';
import { BtnBoxWithContent, BtnWithMargin, FormBlock, FormTitle, TextBtnBox } from '../components/helpers/FormBlock';
import { navigationRoutes } from '../../App';
import { BaseValidation } from '../components/Input/validationRules';
import { UserContext } from '../States/Contexts/UserContext';
import * as Animatable from 'react-native-animatable';
import { ErrorMessage } from '../components/Input/ErrorValidation';



export const AddPacient = ({navigation}) => {

    const {addUser} = useContext(UserContext);

    const [userName, changeUserName]   = useState({
        value: '',
        isValid: true,
        isTouch: false
    });
    const [userNumber, changeUserNumber] = useState({
        value: '',
        isValid: true,
        isTouch: false
    });
    const [userAvatar, changeUserAvatar]    = useState({
        value: '',
        isValid: true,
        isTouch: false
    });

    const clearAllInputs = () => {
        changeUserAvatar({
            value: '',
            isValid: true,
            isTouch: false
        });
        changeUserName({
            value: '',
            isValid: true,
            isTouch: false
        });
        changeUserNumber({
            value: '',
            isValid: true,
            isTouch: false
        });
    };
    


    const sumbitForm = () => {
        const pushedData = {
            fullName:userName.value,
            id: Math.random().toString(),
            phoneNumber: userNumber.value,
            avatar: userAvatar.value,
            receptions: [],
        };
        
        addUser(
            pushedData
        );

        alert('Позьзователь создан');

        clearAllInputs();

        navigation.navigate(navigationRoutes.pacientReception.route);
    };


    const isValidedForm = () => {
        if(userAvatar.isValid && userName.isValid, userAvatar.isValid){
            if(userAvatar.isTouch && userName.isTouch && userAvatar.isTouch){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    };

    const sendData = () => {
        isValidedForm() ? sumbitForm() : alert('Введите коректные данные');
    };


    return (
        <Container bg={mainBg}>
            <Wrapper>
                <FormTitle>
                    Добавить пациента
                </FormTitle>
                <FormBlock>
                    <Input 
                        first
                        value={userName.value}
                        changeValue={(val) => {
                            changeUserName(prev => ({...prev, value: val}));
                            BaseValidation(
                                val,
                                changeUserName.bind(this, (prev => ({...prev, isValid: false,isTouch: true}))),
                                changeUserName.bind(this, (prev => ({...prev, isValid: true,isTouch: true}))),
                                5
                            )
                        }}
                        label={'Имя и фамилия'}
                    />

                    {
                        userName.isValid ? null:
                        <Animatable.View animation={'fadeInLeft'} duration={300}>
                            <ErrorMessage>
                                Длина должна быть минимум 4 символа
                            </ErrorMessage>
                        </Animatable.View>
                    }
                        
                    <Input
                        value={userNumber.value}
                        changeValue={(val) => {
                            changeUserNumber(prev => ({...prev, value: val}));
                            BaseValidation(
                                val,
                                changeUserNumber.bind(this, (prev => ({...prev, isValid: false,isTouch: true}))),
                                changeUserNumber.bind(this, (prev => ({...prev, isValid: true,isTouch: true}))),
                                5
                            )
                        }}
                        label={'Номер телефона'}
                    />

                    {
                        userNumber.isValid ? null:
                            <Animatable.View animation={'fadeInLeft'} duration={300}>
                                <ErrorMessage>
                                    Длина должна быть минимум 1 и здесь должно быть число 
                                </ErrorMessage>
                            </Animatable.View>
                    }

                    <Input
                        value={userAvatar.value}
                        changeValue={(val) => {
                            changeUserAvatar(prev => ({...prev, value: val}));
                            BaseValidation(
                                val,
                                changeUserAvatar.bind(this, (prev => ({...prev, isValid: false,isTouch: true}))),
                                changeUserAvatar.bind(this, (prev => ({...prev, isValid: true,isTouch: true}))),
                                5
                            )
                        }}
                        label={'Аватарка'}
                    />

                    {
                        userAvatar.isValid ? null:
                            <Animatable.View animation={'fadeInLeft'} duration={300}>
                                <ErrorMessage>
                                    Длина должна быть минимум 5 
                                </ErrorMessage>
                            </Animatable.View>
                    }
                    <BtnWithMargin>
                        <BaseBtn type={baseBtn} bg={accentGreen} onTouch={sendData} volume={{width: '100%'}}>
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

