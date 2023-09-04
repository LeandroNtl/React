import { styled } from "styled-components";

import { FormField, Label, Input } from "../Entry";

const CheckboxContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    color: #168028; 
`;

const BoxContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    text-align: center;

    margin-top: 20px;
`;

const Checkbox = styled(Input)`
    width: 20px;
    height: 20px;

    margin-right: 10px;

    accent-color: #168028;
`;

const CheckboxEntry = (props) => {
    return (
        <FormField>
            <Label htmlFor={props.id}>{props.label}</Label>
            <CheckboxContainer>
                {props.values.map((value, index) => {
                    return (
                        <BoxContainer key={index}>
                            <Checkbox
                                id={props.id}
                                name={props.name}
                                type={props.type}
                                placeholder={props.placeholder}
                            />
                            <Label htmlFor={props.id}>{value.nome}</Label>
                        </BoxContainer>
                    );
                })}
            </CheckboxContainer>
        </FormField>
    );
};

export default CheckboxEntry;