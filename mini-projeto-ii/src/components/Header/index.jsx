import { styled } from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 15vh;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #FFF;
    background-color: #168028;
    border-bottom: 1px solid #000;
`;

const LogoContainer = styled.div`
    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavbarContainer = styled.div`
    width: 100%;
    height: 5vh;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 1px solid #E5E5E5;
`;

const InstitutionContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-left: 20px;
`;

const TitleContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding-right: 20px;
`;

const SmallText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
`;

const BigText = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
`;

const Header = ({ children }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <InstitutionContainer>
                    <SmallText>IFPI</SmallText>
                    <BigText>Instituto Federal do Piauí</BigText>
                    <SmallText>Ministério da Educação</SmallText>
                </InstitutionContainer>
                <TitleContainer>
                    <BigText>Avalia IFPI</BigText>
                </TitleContainer>
            </LogoContainer>
            <NavbarContainer>
                {children}
            </NavbarContainer>

        </HeaderContainer>
    )
}

export default Header