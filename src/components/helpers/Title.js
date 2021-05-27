import React from 'react';
import styled from 'styled-components/native';

export const Title = ({size = 25, children}) => {
    const TitleStyled = styled.Text`
        font-size: ${size}px;
        font-weight: bold;
    `;

    return (
        <TitleStyled>
            {children}
        </TitleStyled>
    )
};


