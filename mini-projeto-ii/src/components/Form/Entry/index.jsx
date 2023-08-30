import { styled } from "styled-components";

const FormField = styled.div`
    width: 80%;
    height: 30px;

    margin-bottom: 35px;
`;

const Label = styled.label`
    width: 100%;
    height: 100%;

    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;

    padding: 5px;
    border-radius: 5px;
    border: 1px solid #168028;

    &::placeholder {
        color: #168028;
    }
`;

export { FormField, Label, Input }