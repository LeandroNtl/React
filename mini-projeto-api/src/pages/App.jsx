import { Outlet } from 'react-router-dom';
import HeaderComponent from '../components/Header';
import MainComponent from '../components/Main';
import FooterComponent from '../components/Footer';



const App = () => {

    return (
        <>
            <HeaderComponent />
            <MainComponent>
                <Outlet />
            </MainComponent>
            <FooterComponent />
        </>

    );

};

export default App;