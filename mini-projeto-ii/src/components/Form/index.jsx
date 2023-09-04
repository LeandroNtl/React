import TextEntry from "./TextEntry";
import SelectEntry from "./SelectEntry";
import NumberEntry from "./NumberEntry";
import CheckboxEntry from "./CheckboxEntry";

import { FormContainer, StyledForm, Button, FormTitle } from "./style";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import forms from "../../data/forms";

function notify() {
    
    const notify = () => toast("Avaliação enviada com sucesso!");

    return (
        <>
            <Button type="submit" onClick={notify}>Enviar</Button>
            <ToastContainer />
        </>
    );
}

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
                                values={item.values}
                            />
                        );
                    }
                })}
                {notify()}
            </StyledForm>
        </FormContainer>
    );

};

export default Form;