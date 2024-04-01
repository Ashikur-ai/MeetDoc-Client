import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/ClientSide/Home/Home";
import Login from "../pages/ClientSide/Login/Login";
import Register from "../pages/ClientSide/Register/Register";
import MainLayout from "../Layout/MainLayout";

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
        ]
    },
     

]);


export default router;