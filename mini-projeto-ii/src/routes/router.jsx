import { createBrowserRouter } from "react-router-dom";

import Base from "../pages/Base";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Notfound from "../pages/Notfound";
import Dashboard from "../pages/Dashboard";
import Avaliate from "../pages/Avaliate";


const Router = createBrowserRouter([

    {
        path: "/",
        element: <Base/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/avaliate/:id",
                element: <Avaliate/>
            },
            {
                path: "*",
                element: <Notfound/>
            },
        ],
    },

]);

export default Router;