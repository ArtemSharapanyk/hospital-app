import React from 'react';
import styled from 'styled-components/native';
import { mainColor } from '../../styles/colorsApp';

export const CardHelperPropertyValue = ({property, value, children, first = false}) => {
        return (
            <Block first={first}>
                <Property>
                    {children}
                    <PropertyText>
                        {property}:
                    </PropertyText>
                </Property>
                <Value>
                    {value}
                </Value>
            </Block>
        );
}; 

const Block = styled.View`
    width: 100%;
    flex-direction: row;
    margin-top: ${({first}) => first ? 0 : '12px'};
`;

const PropertyText = styled.Text`
    color: ${mainColor};
    margin-right: 3px;
    margin-left: 4px;
`;

const Property = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Value = styled.Text`
    font-weight: bold;
`;
