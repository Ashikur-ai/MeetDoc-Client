import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserDoctor } from "react-icons/fa6";
import useAdmin from '../../../hooks/useAdmin';
import useDoctor from '../../../hooks/useDoctor';
import Swal from 'sweetalert2';

const UserDashboard = () => {
    const [isAdmin] = useAdmin();
    const [isDoctor] = useDoctor();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    console.log(isAdmin);
    console.log(isDoctor);
    const { logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch()
    }
    return (
        <>
            <section className="container mx-auto  text-gray-600 body-font relative ">
                <div className="flex flex-1 ">
                    <div className="hidden md:flex md:w-64 md:flex-col  border min-h-screen">
                        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-blue-500 text-white">
                            <Link to="/">
                                <div className="flex items-center text-4xl flex-shrink-0 px-4">
                                    <FaUserDoctor />
                                    <p> MeetDoc</p> <br />
                                </div>
                            </Link>


                            <div className="px-4 mt-8">
                                <label for="" className="sr-only"> Search </label>
                                <div className="relative">
                                    {
                                        isAdmin ? <p className=' text-2xl'>Admin Dashboard</p> : isDoctor ? <><p className=' text-2xl'>Doctor Dashboard</p></> :
                                            <p className=' text-2xl'>User Dashboard</p>
                                    }



                                </div>
                            </div>

                            <div className="px-4 mt-6">
                                <hr className="border-white" />
                            </div>

                            <div className="flex flex-col flex-1 px-3 mt-6">
                                <div className="space-y-4 text-white">
                                    <nav className="flex-1 space-y-2">

                                        {
                                            isAdmin ?
                                                <>


                                                    <NavLink to="/dashboard/manageUsers" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                        Manage Users
                                                    </NavLink>

                                                    <NavLink to="/dashboard/manageDoctors" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                        Manage Doctors
                                                    </NavLink>

                                                    <NavLink to="/dashboard/request" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                        Approved Contact Request
                                                    </NavLink>


                                                </> : isDoctor ?
                                                    <>
                                                        <NavLink to="/dashboard/manageUsers" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                            Edit profile
                                                        </NavLink>

                                                        <NavLink to="/dashboard/manageUsers" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                            Manage Meetings
                                                        </NavLink>
                                                    </>
                                                    :
                                                    <>
                                                        <NavLink to="/dashboard/edit" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                            Edit Profile
                                                        </NavLink>

                                                        <NavLink to="/dashboard/view" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                            View Meeting Status
                                                        </NavLink>

                                                        <NavLink to="/dashboard/request" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                                            Cancel Request
                                                        </NavLink>

                                                        


                                                    </>
                                        }

                                        <NavLink onClick={handleLogout} className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200  hover:text-white rounded-lg hover:bg-indigo-600 active:underline group">

                                            LogOut
                                        </NavLink>


                                    </nav>


                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 border min-h-screen ">
                        <main>
                            <div className="py-6">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                    <Outlet></Outlet>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserDashboard;