import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

// const theme = localStorage.getItem('theme') || 'light';
// const

function Base() {
  return (
    <>
      <Header>
        <h1>Header</h1>
      </Header>
      <Main>
        <Outlet/>
      </Main>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </>
  );
}

export default Base;