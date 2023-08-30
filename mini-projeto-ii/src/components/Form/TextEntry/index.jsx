import { styled } from "styled-components";

import { FormField, Label, Input } from "../Entry";

// props: id, label, name, type, required, values = [], placeholder

const TextEntry = (props) => {

    return (
        <FormField>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input
                id={props.id}
                name={props.name}
                type={props.type}
                required={props.required}
                placeholder={props.placeholder}
            />
        </FormField>  
    );
};

export default TextEntry;