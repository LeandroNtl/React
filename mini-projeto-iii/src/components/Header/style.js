import { styled } from 'styled-components';

const HeaderContainer = styled.header`

    width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};

    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
    
`;

export default HeaderContainer;
