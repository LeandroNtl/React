import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const TitleContainer = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    background-color: #EEEFF1;
    border-top: 4px solid #00420C;
    color: #00420C;
    
    h4 {
        margin: 0px 10px;
    }
`;

const SidebarLinks = styled.ul`
    width: 100%;

    list-style: none;
    padding: 0;
    margin: 0;
`;

const SidebarLink = styled.li`
    padding: 25px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
        background-color: #EEEFF1;
    }
`;

const Links = styled(Link)`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;
    color: #00420C;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    
    ${({ active }) => active && `
        color: #01FF2B;
    `}

    &:hover {
        color: #01FF2B;
    }
`;

const MenuSidebar = ({ texto, links }) => {

    const location = useLocation();

    return (
        <>
            <TitleContainer>
                <h4>{texto}</h4>
            </TitleContainer>
            <SidebarLinks>
                {links.map((link, index) => (
                    <SidebarLink key={index}>
                        <Links to={link.path} active={location.pathname === link.path}>
                            {link.nome}
                        </Links>
                    </SidebarLink>
                ))}
            </SidebarLinks>
        </>
    );
}

export default MenuSidebar;