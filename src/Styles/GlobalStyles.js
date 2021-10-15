import styled from "styled-components";

export const InputField = styled.input`
    border-radius: 10px;
    border: 2px solid #CCCCCC;
    height: 18px;
`;

export const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
`;