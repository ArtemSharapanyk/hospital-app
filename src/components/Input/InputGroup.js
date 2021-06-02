import React from 'react'
import styled from "styled-components/native";
import { TextInput } from './Input';




export const InputGroup = ({firtsControl, secondControl, placeholder, fontSize, validFunc}) => {
    const [firstValue, firstChange]   = firtsControl;
    const [secondValue, secondChange] = secondControl;
    

    return (
        <InputBox>
            <InputWithAnotherWidth>
                <TextInput
                    value={firstValue.value}
                    onChangeText={firstChange}
                    placeholder={placeholder[0]}
                    fontSize={fontSize}
                    style={styles}
                />
            </InputWithAnotherWidth>
            
            <InputWithAnotherWidth>
                <TextInput
                    value={secondValue.value}
                    onChangeText={secondChange}
                    placeholder={placeholder[1]}
                    fontSize={fontSize}
                    style={styles}
                />
            </InputWithAnotherWidth>
        </InputBox>
    );
};

const styles = {
    textAlign: 'center'
};

const InputBox = styled.View`
    width: 100%;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const InputWithAnotherWidth = styled.View`
    width: 45%;
`;