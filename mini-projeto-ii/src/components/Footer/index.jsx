import { styled } from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    height: 10vh;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000;
`;

const Footer = ({ children }) => {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    )
}

export default Footer