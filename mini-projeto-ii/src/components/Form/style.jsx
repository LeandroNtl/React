import { styled } from "styled-components";

const FormContainer = styled.div`
    width: 70%;
    min-height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid #F5F5F5;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px #168028;
    padding: 20px;
    margin: 20px;
`;

const StyledForm = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    width: 30%;
    height: 100%;

    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;

    border: 1px solid #168028;
    background-color: #168028;
    color: #FFF;

    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #FFF;
        color: #168028;
    }
`;

const FormTitle = styled.h1`
    width: 100%;
    height: 100%;

    margin-bottom: 20px;

    text-align: center;
    color: #168028;
`;

export { FormContainer, StyledForm, Button, FormTitle };