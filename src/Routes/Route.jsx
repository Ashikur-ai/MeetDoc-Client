import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/ClientSide/Home/Home";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
]);


export default router;