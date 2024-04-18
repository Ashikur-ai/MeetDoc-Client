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
import ManageDoctors from "../pages/AdminSide/ManageDoctors";
import DocRegister from "../pages/ClientSide/Register/DocRegister";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/DoctorSide/EditProfile";
import DocProfile from "../pages/DoctorSide/DocProfile";



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
            },
            {
                path: "/docRegister",
                element: <DocRegister></DocRegister>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
        children: [
        
        // admin url 
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageDoctors',
                element: <ManageDoctors></ManageDoctors>
            },
            
            // doctor url
            {
                path: 'editDocProfile',
                element: <EditProfile></EditProfile>
            },
            {
                path: 'docProfile/:email',
                element: <DocProfile></DocProfile>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctor/${params.email}`)
            }
        ]

    }


]);


export default router;