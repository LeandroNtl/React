import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

// const theme = localStorage.getItem('theme') || 'light';
// const

function Base() {
  return (
    <>
      <Header>
        <Navbar/>
      </Header>
      <Main>
        <Outlet/>
      </Main>
      <Footer>
        <p>&copy; 2023 - Desenvolvido por Leandro Natálio</p>
      </Footer>
    </>
  );
}

export default Base;