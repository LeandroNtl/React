import { styled } from "styled-components";

import MenuSidebar from "./sidebar";

const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    border: 1px solid #E5E5E5;
    margin-left: 10px;
`;

const SideBar = () => {

    const menuItens = [

        {texto: "AVALIAÇÃO", 
        links: [
            { nome: "Professores", path: "/avaliate/professores" }, 
            { nome: "Cursos", path: "/avaliate/cursos" }, 
            { nome: "Disciplinas", path: "/avaliate/disciplinas" },
        ]},
        {texto: "INFORMAÇÃO", links: [
            { nome: "Sobre", path: "/about" },
            { nome: "Contato", path: "/contact" },
            { nome: "Biblioteca", path: "http://sardes.ifpi.edu.br/pergamum/biblioteca/index.php?resolution2=1024_1&tipo_pesquisa=&filtro_bibliotecas=&filtro_obras=&termo=&tipo_obra_selecionados=" },
        ]},
        {texto: "OUTROS", links: [
            { nome: "Dashboard", path: "/dashboard" },
            { nome: "IFPI", path: "https://www.ifpi.edu.br/corrente" },
            { nome: "SUAP", path: "https://suap.ifpi.edu.br/accounts/login/?next=/" },
        ]},

    ];

    return (
        <SidebarContainer>
            {menuItens.map((item, index) => (
                <MenuSidebar key={index} texto={item.texto} links={item.links}/>
            ))}
        </SidebarContainer>
    );
};

export default SideBar;