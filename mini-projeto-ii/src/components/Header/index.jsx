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

const ContainerTop = styled.div`
    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContainerBottom = styled.div`
    width: 100%;
    height: 5vh;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 1px solid #E5E5E5;
`;

const LogoContainer = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

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

const Header = ({ children }) => {
    return (
        <HeaderContainer>
            <ContainerTop>
                <LogoContainer>
                    <h1>Logo</h1>
                </LogoContainer>
                <TitleContainer>
                    <h1>Mini Projeto II</h1>
                </TitleContainer>
            </ContainerTop>
            <ContainerBottom>
                {children}
            </ContainerBottom>

        </HeaderContainer>
    )
}

export default Header