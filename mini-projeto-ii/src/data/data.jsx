const backgroundColors = [
    "#168028",
    "#1B9E77",
    "#D95F02",
    "#7570B3",
    "#E7298A",
    "#66A61E",
    "#E6AB02",
    "#A6761D",
    "#666666",
];

const courses = {
    labels: ["Análise e Desenvolvimento de Sistemas", "Ciência da Computação", "Engenharia da Computação", "Sistemas de Informação"],
    datasets: [
        {
            label: "Avaliação",
            data: [90, 95, 70, 80],
            fill: false,
            backgroundColor: backgroundColors,
        },
    ],
};

const disciplines = {
    labels: ["Algoritmos", "Banco de Dados", "Estrutura de Dados", "Lógica de Programação", "Matemática", "Programação Orientada a Objetos"],
    datasets: [
        {
            label: "Avaliação",
            data: [95, 80, 70, 56, 90, 97],
            fill: false,
            backgroundColor: backgroundColors,
        },
    ],
};

const teachers = {
    labels: ["Estevão", "João", "Maria", "José", "Pedro", "Paulo"],
    datasets: [
        {
            label: "Avaliação",
            data: [99, 70, 88, 75, 90, 80],
            fill: false,
            backgroundColor: backgroundColors,
        },
    ],
};

export { courses, disciplines, teachers };