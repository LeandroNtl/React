import { styled } from "styled-components";

import TextEntry from "./TextEntry";
import SelectEntry from "./SelectEntry";
import NumberEntry from "./NumberEntry";
import CheckboxEntry from "./CheckboxEntry";

import forms from "../../data/forms";

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

const Form = ({ id }) => {
    
    return (
        <FormContainer>
            <FormTitle>Avaliar {id}</FormTitle>
            <StyledForm method="GET" action="">
                {forms[id].map((item, index) => {
                    if (item.type === "text") {
                        return (
                            <TextEntry
                                key={index}
                                id={item.id}
                                label={item.label}
                                name={item.name}
                                type={item.type}
                                required={item.required}
                                placeholder={item.placeholder}
                            />
                        );
                    } else if (item.type === "select") {
                        return (
                            <SelectEntry
                                key={index}
                                id={item.id}
                                label={item.label}
                                name={item.name}
                                type={item.type}
                                required={item.required}
                                values={item.values}
                            />
                        );
                    } else if (item.type === "number") {
                        return (
                            <NumberEntry
                                key={index}
                                id={item.id}
                                label={item.label}
                                name={item.name}
                                type={item.type}
                                required={item.required}
                                placeholder={item.placeholder}
                            />
                        );
                    }  else if (item.type === "checkbox") {
                        return (
                            <CheckboxEntry
                                key={index}
                                id={item.id}
                                label={item.label}
                                name={item.name}
                                type={item.type}
                                required={item.required}
                                values={item.values}
                            />
                        );
                    }
                })}
                <Button type="submit">Enviar</Button>
            </StyledForm>
        </FormContainer>
    );

};

export default Form;