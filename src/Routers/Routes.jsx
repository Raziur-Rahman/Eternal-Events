import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Components/DashBoard/DashBoard";
import Favorites from "../Components/Favorites/Favorites";
import Cart from "../Components/Cart/Cart";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch("/public/Fake_data.json")
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: () => fetch("/public/Fake_data.json")
            },
            {
                path: '/cart',
                element: <PrivateRoutes> <Cart></Cart> </PrivateRoutes>
            },
            {
                path: "/favorites",
                element: <PrivateRoutes> <Favorites></Favorites> </PrivateRoutes>
            },
            {
                path: "/dashboard",
                element:<PrivateRoutes> <DashBoard></DashBoard> </PrivateRoutes>
            },
        ]
    }
])

export default routes;