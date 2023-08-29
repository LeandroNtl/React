import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavbarContainer = styled.nav`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavbarLinks = styled.ul`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    list-style: none;
`;

const NavbarLink = styled.li`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Links = styled(Link)`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    color: #FFFFFF;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    
    ${({ active }) => active && `
        color: #01FF2B;
    `}

    &:hover {
        color: #01ff2b;
    }
`;

const Navbar = () => {

    const location = useLocation();

    const texts = ["Home", "Dashboard", "Contact", "About"];

    const links = ["/", "/dashboard", "/contact", "/about"];

    return (
        <NavbarContainer>
            <NavbarLinks>
                {texts.map((text, index) => (
                    <NavbarLink key={text}>
                        <Links active = {location.pathname === links[index]} to={links[index]}>{text}</Links>
                    </NavbarLink>
                ))}
            </NavbarLinks>
        </NavbarContainer>
    );
};

export default Navbar;