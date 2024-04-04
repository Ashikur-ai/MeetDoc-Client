import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
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