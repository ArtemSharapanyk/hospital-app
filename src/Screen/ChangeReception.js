import React, { useState,useContext } from 'react';
import { Container } from '../components/helpers/Container';
import { BtnBoxWithContent, BtnWithMargin, FormBlock, TextBtnBox } from '../components/helpers/FormBlock';
import { Btn as BaseBtn } from '../components/UI/Btn/Btn';
import { InputGroup } from '../components/Input/InputGroup';
import { accent } from '../styles/colorsApp';
import { baseBtn } from '../components/UI/Btn/BtnsTypes';
import { Input } from '../components/Input/Input';
import { Wrapper } from '../components/helpers/Wrapper';
import { Ionicons as Mark } from '@expo/vector-icons'; 
import { ReceptionContext } from '../States/Contexts/ReceptionContext';
import { ErrorMessage } from '../components/Input/ErrorValidation';
import * as Animatable from 'react-native-animatable';
import { dataValidation, DiagnoseValidation, priceValidation, ToothValidation } from '../components/Input/validationRules';

export const ChangeReception = ({route, navigation}) => {
    const {changeReception} = useContext(ReceptionContext);

    const [userDiagnose, changeUserDiagnose]   = useState({
        value: '',
        isValid: true,
        isTouch: false
    });
    const [userNumberOfTooth, changeUserNumberOfTooth] = useState({
        value: '',
        isValid: true,
        isTouch: false
    });
    const [dateOfReception, changeDate]    = useState({
        value: '',
        isValid: true,
        isTouch: false
    });
    const [priceOfReception, changePrice]  = useState({
        value: '',
        isValid: true,
        isTouch: false
    });

    const sumbitForm = () => {
        const pushedData = {
            diagnose: userDiagnose.value,
            date: dateOfReception.value.split(/-/)[0],
            price: priceOfReception.value + ' Р',
            bindedTime: dateOfReception.value.split(/-/)[1],
            numberOfTooth: userNumberOfTooth.value,
            id: Math.random()
        };


        changeReception(
            route.params.receptionId,
            route.params.userId,
            pushedData
        );
        

        navigation.goBack();
    };


    const isValidedForm = () => {
        if(userDiagnose.isValid && userNumberOfTooth.isValid  && dateOfReception.isValid && priceOfReception.isValid){
            if(userDiagnose.isTouch  && dateOfReception.isTouch && priceOfReception.isTouch){
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
        <Container bg={'#fff'}>
            <Wrapper>
                <FormBlock>
                    <Input 
                        first
                        value={userDiagnose.value}
                        changeValue={(val) => {
                            changeUserDiagnose(prev => ({...prev, value: val}));
                            DiagnoseValidation(
                                val,
                                changeUserDiagnose.bind(this, (prev => ({...prev, isValid: false,isTouch: true}))),
                                changeUserDiagnose.bind(this, (prev => ({...prev, isValid: true,isTouch: true})))
                            )
                        }}
                        label={'Диагноз'}
                    />

                    {
                        userDiagnose.isValid ? null:
                        <Animatable.View animation={'fadeInLeft'} duration={300}>
                            <ErrorMessage>
                                Длина должна быть минимум 4 символа
                            </ErrorMessage>
                        </Animatable.View>
                    }
                    
                    <Input
                        value={userNumberOfTooth.value}
                        changeValue={(val) => {
                            changeUserNumberOfTooth(prev => ({...prev, value: val}));
                            ToothValidation(
                                val,
                                changeUserNumberOfTooth.bind(this, (prev => ({...prev, isValid: false,isTouch: true}))),
                                changeUserNumberOfTooth.bind(this, (prev => ({...prev, isValid: true,isTouch: true})))
                            )
                        }}
                        label={'Номер зуба'}
                    />

                    {
                        userNumberOfTooth.isValid ? null:
                        <Animatable.View animation={'fadeInLeft'} duration={300}>
                            <ErrorMessage>
                                Длина должна быть минимум 1 и здесь должно быть число 
                            </ErrorMessage>
                        </Animatable.View>
                    }


                    <InputGroup
                        firtsControl={[dateOfReception, (val) => {
                            changeDate(prev => ({...prev, value: val}));
                            dataValidation(
                                val,
                                changeDate.bind(this, (prev => ({...prev, isValid: false,isTouch: true}))),
                                changeDate.bind(this, (prev => ({...prev, isValid: true,isTouch: true})))
                            )
                        }]}
                        secondControl={[priceOfReception, (val) => {
                            changePrice(prev => ({...prev, value: val}));
                            priceValidation(
                                val,
                                changePrice.bind(this, (prev => ({...prev, isValid: false,isTouch: true}))),
                                changePrice.bind(this, (prev => ({...prev, isValid: true,isTouch: true})))
                            )
                        }]}
                        placeholder={['Дата', 'Цена']}
                        fontSize={15}
                    />

                    {
                        dateOfReception.isValid ? null:
                        <Animatable.View animation={'fadeInLeft'} duration={300}>
                            <ErrorMessage center>
                                Длина должна быть минимум 5 
                            </ErrorMessage>
                        </Animatable.View>
                    }

                    {
                        priceOfReception.isValid ? null:
                        <Animatable.View animation={'fadeInLeft'} duration={300}>
                            <ErrorMessage center>
                                Длина должна быть минимум 5 
                            </ErrorMessage>
                        </Animatable.View>
                    }
                    <BtnWithMargin>
                        <BaseBtn type={baseBtn} bg={accent} onTouch={sendData} volume={{width: '100%'}}>
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





