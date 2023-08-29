import { styled } from 'styled-components'

const StyledMain = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    background-color: #fff;
`;

const Main = ({ children }) => {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}

export default Main