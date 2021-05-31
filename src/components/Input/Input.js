import React from 'react';
import styled from 'styled-components';

export const Input = ({label, value, changeValue, first,
    fontSize = 20
}) => {

    return (
        <InputBlock first={first}> 
            <Label>
                {label}
            </Label>
            <TextInput value={value} onChangeText={changeValue}  />
        </InputBlock>
    )
};

export const TextInput = styled.TextInput`
    border-bottom-color: #F0F0F0;
    border-bottom-width: 1px;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: ${({fontSize}) => fontSize ? fontSize : 20}px;
`;

const Label = styled.Text`
    color: #A0A2A4;
    margin-bottom: 10px;
`;

const InputBlock = styled.View`
    width: 100%;
    margin-top:  ${({first}) => first ? 10 : 20}px;
`;