import { styled } from 'styled-components';

const MainContainer = styled.main`

    width: 100%;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.colors.background.color};
    color: ${({ theme }) => theme.colors.text.secondary};

`;

export default MainContainer;