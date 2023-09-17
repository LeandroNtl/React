import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/theme";
import Header from "../components/Header";
import { useState } from "react";

function App() {

    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme ? localTheme : 'light';
    });

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeProvider theme={theme === 'light' ? light : dark}>
            <Header toggleTheme={toggleTheme} />
            <Outlet />
        </ThemeProvider>
    );
};

export default App;