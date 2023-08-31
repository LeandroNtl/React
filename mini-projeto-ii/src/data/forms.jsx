// A esclarecer do professor na apresentação do conteúdo.
// A disponibilidade do professor para tirar dúvidas.
// A capacidade do professor de estimular a participação dos alunos.
// A organização das aulas.
// A qualidade das atividades e tarefas propostas.
// A pontualidade do professor.
// A capacidade de comunicação do professor.
// A abertura do professor para feedback.


const forms = {
    professores: [
        {
            id: "professor",
            label: "Professor",
            name: "professor",
            type: "select",
            required: true,
            placeholder: "Professor",
            values: [
                {
                    id: 1,
                    nome: "João",
                },
                {
                    id: 2,
                    nome: "Maria",
                },
                {
                    id: 3,
                    nome: "José",
                },
                {
                    id: 4,
                    nome: "Ana",
                }
            ]
        },
        {
            id: "nota",
            label: "Nota",
            name: "nota",
            type: "number",
            required: true,
            placeholder: "Nota"
        },
        {
            id: "comentario",
            label: "Comentário",
            name: "comentario",
            type: "text",
            required: true,
            placeholder: "Comentário"
        },
        {
            id: "O professor domina o conteúdo da disciplina.",
            label: "O professor domina o conteúdo da disciplina.",
            name: "O professor domina o conteúdo da disciplina.",
            type: "checkbox",
            required: true,
            values: [
                {
                    id: 1,
                    nome: "Discordo totalmente",
                },
                {
                    id: 2,
                    nome: "Discordo parcialmente",
                },
                {
                    id: 3,
                    nome: "Indiferente",
                },
                {
                    id: 4,
                    nome: "Concordo parcialmente",
                },
                {
                    id: 5,
                    nome: "Concordo totalmente",
                }
            ]
        },
        {
            id: "O professor é pontual.",
            label: "O professor é pontual.",
            name: "O professor é pontual.",
            type: "checkbox",
            required: true,
            values: [
                {
                    id: 1,
                    nome: "Discordo totalmente",
                },
                {
                    id: 2,
                    nome: "Discordo parcialmente",
                },
                {
                    id: 3,
                    nome: "Indiferente",
                },
                {
                    id: 4,
                    nome: "Concordo parcialmente",
                },
                {
                    id: 5,
                    nome: "Concordo totalmente",
                }
            ]
        },
    ],

    cursos: [
        {
            id: "curso",
            label: "Curso",
            name: "curso",
            type: "select",
            required: true,
            placeholder: "Curso",
            values: [
                {
                    id: 1,
                    nome: "Analise e Desenvolvimento de Sistemas",
                },
                {
                    id: 2,
                    nome: "Ciência da Computação",
                },
                {
                    id: 3,
                    nome: "Engenharia da Computação",
                },
                {
                    id: 4,
                    nome: "Engenharia de Software",
                },
                {
                    id: 5,
                    nome: "Sistemas de Informação",
                }
            ]
        },
        {
            id: "nota",
            label: "Nota",
            name: "nota",
            type: "number",
            required: true,
            placeholder: "Nota"
        },
        {
            id: "comentario",
            label: "Comentário",
            name: "comentario",
            type: "text",
            required: true,
            placeholder: "Comentário"
        }
    ],

    disciplinas: [
        {
            id: "disciplina",
            label: "Disciplina",
            name: "disciplina",
            type: "select",
            required: true,
            placeholder: "Disciplina",
            values: [
                {
                    id: 1,
                    nome: "Algoritmos",
                },
                {
                    id: 2,
                    nome: "Banco de Dados",
                },
                {
                    id: 3,
                    nome: "Estrutura de Dados",
                },
                {
                    id: 4,
                    nome: "Inteligência Artificial",
                },
                {
                    id: 5,
                    nome: "Programação Orientada a Objetos",
                }
            ]
        },
        {
            id: "nota",
            label: "Nota",
            name: "nota",
            type: "number",
            required: true,
            placeholder: "Nota"
        },
        {
            id: "comentario",
            label: "Comentário",
            name: "comentario",
            type: "text",
            required: true, 
            placeholder: "Comentário"
        }
    ]
};

export default forms;