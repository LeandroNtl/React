import { createBrowserRouter } from 'react-router-dom';

import App from './pages/App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

const Router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <h1>About</h1>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '*',
                element: <Notfound />
            }
        ],

    }
]);

export default Router;