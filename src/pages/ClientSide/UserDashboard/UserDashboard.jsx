import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaUserDoctor } from "react-icons/fa6";
import useAdmin from '../../../hooks/useAdmin';
import useDoctor from '../../../hooks/useDoctor';
import Swal from 'sweetalert2';
import Sidebar2 from '../../../components/Sidebar2';

const UserDashboard = () => {
    const [isAdmin] = useAdmin();
    const [isDoctor] = useDoctor();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    
    const { logOut, user } = useContext(AuthContext);
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
                    <div className="hidden md:flex md:w-64 md:flex-col   min-h-screen">
                        <div className="flex flex-col flex-grow pt-5 overflow-y-auto ">
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

                            <div className="flex flex-col flex-1 px-3 mt-6 ">
                                <div className="space-y-4 text-white">
                                    
                                    <nav className="flex-1 space-y-2">

                                        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full shadow-2xl bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                                            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                                                {
                                                    isAdmin ? <p className=' text-xl font-bold text-black'>Admin Dashboard</p> : isDoctor ? <><p className=' text-xl font-bold text-black'>Doctor Dashboard</p></> :
                                                        <p className=' text-xl font-bold text-black'>User Dashboard</p>
                                                }
                                                
                                                <ul className="space-y-2 font-medium">

                                                    
                                                    
                                                        {
                                                            isAdmin ?
                                                                <>
                                                                

                                                                <li>
                                                                    <NavLink to="/dashboard/manageUsers" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                                                        </svg>



                                                                        <span className="ms-3">Manage Users</span>
                                                                    </NavLink>
                                                                </li>


                                                                <li>
                                                                    <NavLink to="/dashboard/manageDoctors" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                        </svg>
                                                                        <span className="ms-3">Manage Doctors</span>
                                                                    </NavLink>
                                                                </li>

                                                                <li>
                                                                    <NavLink to="/dashboard/addMedicine" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 1 0-18c1.052 0 2.062.18 3 .512M7 9.577l3.923 3.923 8.5-8.5M17 14v6m-3-3h6" />
                                                                        </svg>

                                                                        <span className="ms-3">Add Medicine</span>
                                                                    </NavLink>
                                                                </li>


                                                                <li>
                                                                    <NavLink to="/dashboard/manageMedicine" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z" />
                                                                        </svg>


                                                                        <span className="ms-3">Manage Medicine</span>
                                                                    </NavLink>
                                                                </li>

                                                                <li>
                                                                    <NavLink to="/dashboard/request" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
                                                                        </svg>



                                                                        <span className="ms-3">Approve Meeting Request</span>
                                                                    </NavLink>
                                                                </li>
                                                                
                                                                </>
                                                                
                                                                : isDoctor ?
                                                                    <>
                                                                        <li>
                                                                        <NavLink to={`/dashboard/docProfile/${user.email}`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                            </svg>




                                                                                <span className="ms-3">My Profile</span>
                                                                            </NavLink>
                                                                    </li>
                                                                    

                                                                    <li>
                                                                        <NavLink to="/dashboard/editDocProfile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z" />
                                                                            </svg>





                                                                            <span className="ms-3">Edit Profile</span>
                                                                        </NavLink>
                                                                    </li>

                                                                    <li>
                                                                        <NavLink to="/dashboard/doc_manageMeeting" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                                            </svg>






                                                                            <span className="ms-3">Your Meetings</span>
                                                                        </NavLink>
                                                                    </li>

                                                                    
                                                                    

                                                                    

                                                                   

                                                                    </>
                                                                    :
                                                                    <>
                                                                    <li>
                                                                        <NavLink to={`/dashboard/myProfile/${user.email}`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                            </svg>


                                                                            <span className="ms-3">Your Profile</span>
                                                                        </NavLink>    
                                                                    </li>

                                                                    <li>
                                                                        <NavLink to="/dashboard/updateProfile"  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                                                            </svg>

                                                                            <span className="flex-1 ms-3 whitespace-nowrap">Update profile</span>
                                                                        </NavLink>
                                                                    </li>

                                                                    <li>
                                                                        <NavLink to={`/dashboard/manageMeetings/${user.email}`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                                                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                                                            </svg>
                                                                            <span className="flex-1 ms-3 whitespace-nowrap">Manage Requests</span>
                                                                            
                                                                        </NavLink>
                                                                    </li>

                                                                    <li>
                                                                        <NavLink to={`/dashboard/payments/${user.email}`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                                                                            </svg>

                                                                            <span className="flex-1 ms-3 whitespace-nowrap">Payments</span>
                                                                        </NavLink>
                                                                    </li>

                                                                    <li>
                                                                        <NavLink to={`/dashboard/medicine`}  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                                                            </svg>
                                                                            <span className="flex-1 ms-3 whitespace-nowrap">Buy Medicine</span>
                                                                        </NavLink>
                                                                    </li>


                                                                    <li>
                                                                        <NavLink to={`/dashboard/cart/${user.email}`} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                                                                            </svg>

                                                                            <span className="flex-1 ms-3 whitespace-nowrap">Carts</span>
                                                                        </NavLink>
                                                                    </li>
                                                                    </>
                                                        }
                                                        
                                                    

                                                    <li>
                                                        <NavLink onClick={handleLogout} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                                            </svg>
                                                            <span className="flex-1 ms-3 whitespace-nowrap">LogOut</span>
                                                        </NavLink>
                                                    </li>
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                </ul>
                                            </div>
                                        </aside>

                                        


                                    </nav>


                                </div>


                            </div>
                        </div>


                    </div>


                    <div className="flex flex-col flex-1  min-h-screen ">
                        <main>
                            
                            <div className="py-6">
                                <div className="px-4 mt-2 shadow-2xl ml-10 rounded-2xl border py-10 max-w-7xl sm:px-6 md:px-8">
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