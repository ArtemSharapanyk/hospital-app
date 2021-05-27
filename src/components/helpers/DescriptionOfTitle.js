import React from 'react';
import styled from 'styled-components/native';
import { decoratedColor } from '../../styles/colorsApp';

export const DescriptionOfTitle = ({size = 10, isBold = false, children}) => {
    const setWeigth = isBold ? 'bold' : 'normal';
    
    const TitleDescription = styled.Text`
        font-size: ${size}px;
        color: ${decoratedColor};
        font-weight: ${setWeigth};
    `;
    
    return (
        <TitleDescription>
            {children}
        </TitleDescription>
    )
};

