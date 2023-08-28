import { styled } from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #000;
`;

const Header = ({ children }) => {
    return (
        <HeaderContainer>
            {children}
        </HeaderContainer>
    )
}

export default Header