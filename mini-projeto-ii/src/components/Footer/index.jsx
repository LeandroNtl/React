import { styled } from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    height: 10vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #168028;
    color: #FFF;
`;

const Footer = ({ children }) => {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    )
}

export default Footer