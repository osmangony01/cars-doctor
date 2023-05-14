import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ServiceLayout from "../components/Layout/ServiceLayout";
import CheckOut from "../components/CheckOut/CheckOut";
import LoadSpecificService from "../loader/LoadSpecificService";
import Booking from "../components/Booking/Booking";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }, 
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: LoadSpecificService
    },
    {
        path: 'booking',
        element:<PrivateRoute> <Booking></Booking></PrivateRoute>
    }
    
]);

export default router;