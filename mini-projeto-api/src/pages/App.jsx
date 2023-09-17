import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import HeaderComponent from '../components/Header';
import MainComponent from '../components/Main';
import FooterComponent from '../components/Footer';



const App = () => {

    return (
        <Container>
            <HeaderComponent />
            <MainComponent>
                <Outlet />
            </MainComponent>
            <FooterComponent />
        </Container>

    );

};

export default App;