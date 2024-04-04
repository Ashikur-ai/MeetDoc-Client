import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/ClientSide/Home/Home";
import Login from "../pages/ClientSide/Login/Login";
import Register from "../pages/ClientSide/Register/Register";
import MainLayout from "../Layout/MainLayout";
import AllDoctors from "../pages/ClientSide/AllDoctors/AllDoctors";
import UserDashboard from "../pages/ClientSide/UserDashboard/UserDashboard";
import ManageUsers from "../pages/AdminSide/ManageUsers";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: "/doctors",
                element: <AllDoctors></AllDoctors>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <UserDashboard></UserDashboard>,
        children: [
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            }
        ]

    }


]);


export default router;