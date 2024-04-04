import React, { useContext } from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    
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
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <NavLink className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">


                        <Link className=" hover:text-gray-900">Third Link</Link>

                        <Link className="mx-5 hover:text-gray-900">Fourth Link</Link>

                        {
                            user ? 
                                <><button onClick={handleLogout} className='btn btn-ghost'>Logout</button></> :
                                <> <Link to="/login" className="hover:text-gray-900">login </Link></>
                        }

                       


                    </NavLink>
                    <Link to="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <p className='text-3xl'><FaUserDoctor /></p>
                        <span className="ml-3 text-xl">MeetDoc</span>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <Link to="/dashboard">
                            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dashboard
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;