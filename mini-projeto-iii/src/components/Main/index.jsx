import MainContainer from "./style"
import Container from "../Container"


const Main = ({ children }) => {    

    return (
        <MainContainer>
            <Container>
                <h1>Theme Switcher</h1>
            </Container>
            {children}
        </MainContainer>
    );
};

export default Main;