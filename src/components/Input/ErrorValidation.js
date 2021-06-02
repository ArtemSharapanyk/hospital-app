import styled from "styled-components/native";
import { redDecorated } from "../../styles/colorsApp";

export const ErrorMessage = styled.Text`
    color: ${redDecorated};
    margin-top: 10px;
    text-align: ${({center}) => center ? 'center' : 'left'};
`;
