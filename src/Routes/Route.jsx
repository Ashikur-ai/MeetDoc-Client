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
import DoctorProfile from "../pages/ClientSide/DoctorProfile/DoctorProfile";
import SetMeeting from "../pages/ClientSide/SetMeeting/SetMeeting";
import ManageMeeting from "../pages/ClientSide/ManageMeeting/ManageMeeting";
import UpdateClientProfile from "../pages/ClientSide/UpdateClientProfile/UpdateClientProfile";
import ClientProfile from "../pages/ClientSide/ClientProfile/ClientProfile";
import Doc_ManageMeeting from "../pages/DoctorSide/Doc_ManageMeeting/Doc_ManageMeeting";
import MeetingRequest from "../pages/AdminSide/MeetingRequest/MeetingRequest";
import ContactPage from "../pages/ClientSide/ContactPage/ContactPage";
import AboutPage from "../pages/ClientSide/AboutPage/AboutPage";
import CategoryDoc from "../pages/ClientSide/CategoryDoc/CategoryDoc";
import Payment from "../pages/ClientSide/Payment/Payment";
import Payments from "../pages/ClientSide/Payments/Payments";
import General from "../pages/AdminSide/General/General";
import Medicine from "../pages/ClientSide/Medicine/Medicine";
import AddMedicine from "../pages/AdminSide/Medicine/AddMedicine";
import ManageMedicine from "../pages/AdminSide/Medicine/ManageMedicine";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ({ params }) => fetch(`http://localhost:5000/feedback`)
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
                path: "/contact",
                element: <ContactPage></ContactPage>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/docRegister",
                element: <DocRegister></DocRegister>
            },
            {
                path: "/docDetails/:email",
                element: <DoctorProfile></DoctorProfile>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctor/${params.email}`)

            },
            {
                path: "/setMeeting/:email",
                element: <SetMeeting></SetMeeting>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctor/${params.email}`)
            },
            {
                path: "/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/meetings/${params.id}`)
            },

            // category routes 
            {
                path: "/doctors/:category",
                element: <CategoryDoc></CategoryDoc>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctors/${params.category}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
        children: [

            // admin url 
            {
                path: '/dashboard',
                element: <General></General>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageDoctors',
                element: <ManageDoctors></ManageDoctors>
            },
            {
                path: 'request',
                element: <MeetingRequest></MeetingRequest>
            },
            {
                path: 'addMedicine',
                element: <AddMedicine></AddMedicine>
            },
            {
                path: 'manageMedicine',
                element: <ManageMedicine></ManageMedicine>
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
            },
            {
                path: "doc_manageMeeting",
                element: <Doc_ManageMeeting></Doc_ManageMeeting>
            },

            // user urls 
            {
                path: 'manageMeetings/:email',
                element: <ManageMeeting></ManageMeeting>,
                loader: ({ params }) => fetch(`http://localhost:5000/getMeeting/${params.email}`)
            },
            {
                path: 'payments/:email',
                element: <Payments></Payments>,
                loader: ({ params }) => fetch(`http://localhost:5000/payments/${params.email}`)
            },
            {
                path: 'myProfile/:email',
                element: <ClientProfile></ClientProfile>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.email}`)
            },
            {
                path: 'updateProfile',
                element: <UpdateClientProfile></UpdateClientProfile>
            },
            {
                path: 'medicine',
                element: <Medicine></Medicine>
            }
        ]

    }


]);


export default router;