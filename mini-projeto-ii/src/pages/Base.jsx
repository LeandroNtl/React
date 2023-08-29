import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Container from "../components/Container";

// const theme = localStorage.getItem('theme') || 'light';
// const

function Base() {
  return (
    <>
      <Header>
        <Navbar/>
      </Header>
      <Main>
        <Container width="20%">
          <SideBar/>
        </Container>
        <Container width="80%">
          <Outlet/>
        </Container>
      </Main>
      <Footer>
        <p>&copy; 2023 - Desenvolvido por Leandro Natálio</p>
      </Footer>
    </>
  );
}

export default Base;