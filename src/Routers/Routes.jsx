import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";


import Register from "../Pages/Register/Register";
import Login from "../Pages/LogIn/Login";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;