import { competences, responses } from "./competence";
import { teachers } from "./teachers";

const forms = {

    professores: {
        steps: [
            {
                id: 'step-1',
                name: 'Avaliação Geral',
                fields: [
                    {
                        id: "professor",
                        label: "Professor",
                        name: "professor",
                        type: "select",
                        required: true,
                        placeholder: "Professor",
                        values: teachers,
                    },
                    {
                        id: 'nota',
                        label: "nota",
                        name: "nota",
                        type: "checkbox",
                        required: true,
                        values: [
                            {
                                id: 1,
                                nome: "1",
                            },
                            {
                                id: 2,
                                nome: "2",
                            },
                            {
                                id: 3,
                                nome: "3",
                            },
                            {
                                id: 4,
                                nome: "4",
                            },
                            {
                                id: 5,
                                nome: "5",
                            }
                        ]
                    },
                    {
                        id: "comentario",
                        label: "Comentário",
                        name: "comentario",
                        type: "text",
                        required: true,
                        placeholder: "Comentário"
                    },
                ]
            },
            {
                id: 'step-2',
                name: 'Avaliação por critério',
                fields: competences.map((competence) => {
                    return {
                        id: "criterio-" + competence.id,
                        label: competence.text,
                        name: "criterio-" + competence.id,
                        type: "checkbox",
                        required: true,
                        values: responses,
                    }
                })
            }
        ]
    },
};

export default forms;