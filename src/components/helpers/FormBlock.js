import styled from "styled-components/native";

export const FormBlock = styled.View`
    margin-top: 10px;
`;


export const BtnWithMargin = styled.View`
    margin-top: ${({marginTop}) => marginTop ? marginTop : 30 }px;
`;

export const BtnBoxWithContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextBtnBox = styled.Text`
    margin-left: ${({marginLeft}) => marginLeft ? marginLeft : 10}px;
    color: #fff;
`;

