import { useContext } from 'react';
import Switch  from 'react-switch';
import { ThemeContext } from 'styled-components';

import HeaderContainer from './style';
import Container from '../Container';


const Header = (props) => {

    const { title } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <Container
                
            
            >
                <h1>Theme Switcher</h1>
            </Container>
            <Container>
                <Switch
                    onChange={props.toggleTheme}
                    checked={title === 'light'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor="#333"
                    onColor="#777"
                />
            </Container> 
        </HeaderContainer>
    );
};

export default Header;