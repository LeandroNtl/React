import { styled } from "styled-components";

import { FormField, Label } from "../Entry";

const SelectInput = styled.select`
    width: 102.6%;
    height: 40px;

    padding: 5px;
    border-radius: 5px;
    border: 1px solid #168028;

    option {
        color: #168028;
    }
`;

const SelectEntry = (props) => {
    
    return (
        <FormField>
            <Label htmlFor={props.id}>{props.label}</Label>
            <SelectInput
                id={props.id}
                name={props.name}
                type={props.type}
                required={props.required}
                placeholder={props.placeholder}
            >
                {props.values.map((value, index) => {
                    return <option key={index} value={value.id}>{value.nome}</option>
                })}
            </SelectInput>
        </FormField>  
    );
};

export default SelectEntry;