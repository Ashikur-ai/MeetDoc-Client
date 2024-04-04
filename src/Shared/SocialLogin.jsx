import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });

            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div >
                <button onClick={handleGoogleSignIn}
                    className='text-white bg-blue-600 btn'
                >
                    <FaGoogle></FaGoogle>
                    Continue with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;