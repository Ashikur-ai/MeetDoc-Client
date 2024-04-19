import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from '../../../Shared/SocialLogin';
import { Helmet } from 'react-helmet-async';
const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
        <>
            <Helmet>
                <title>MeetDoc | Login</title>
            </Helmet>
            

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center items-center lg:text-left">
                        <div className="flex flex-col text-center items-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Connect with your Doctor effortlessly and manage meetings seamlessly</h1>
                            
                        </div>
                         <img className='w-1/2  object-center mx-auto object-cover' src="https://i.ibb.co/3vjmTN1/Secure-login-pana.png" alt="img" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='m-5'>
                            
                            <SocialLogin></SocialLogin>
                            <p className="m-5 text-base">Don't have any account? <Link to="/register">Register</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;