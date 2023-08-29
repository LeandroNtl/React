import { styled } from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    min-height: 10vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #168028;
    color: #FFF;
`;

const FooterIconsContainer = styled.div`
    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterIcon = styled.img`
    width: 30px;
    height: 30px;

    margin: 0 10px;
    filter: invert(100%);

    &:hover {
        filter: opacity(25%);
    }
`;

const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CopyRightContainer = styled.div`
    height: 100%;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = ({ children }) => {
    return (
        <FooterContainer>
            <FooterIconsContainer>
                <Link href="https://www.instagram.com/">
                    <FooterIcon src="/assets/icons/instagram.png" />
                </Link>
                <Link href="https://www.facebook.com/">
                    <FooterIcon src="/assets/icons/facebook.png" />
                </Link>
                <Link href="https://www.twitter.com/">
                    <FooterIcon src="/assets/icons/twitter.png" />
                </Link>
                <Link href="https://github.com/LeandroNtl/React/">
                    <FooterIcon src="/assets/icons/github.png" />
                </Link>
            </FooterIconsContainer>
            <CopyRightContainer>
                {children}
            </CopyRightContainer>
        </FooterContainer>
    )
}

export default Footer