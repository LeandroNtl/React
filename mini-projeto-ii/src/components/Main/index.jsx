import { styled } from 'styled-components'

const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = ({ children }) => {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}

export default Main