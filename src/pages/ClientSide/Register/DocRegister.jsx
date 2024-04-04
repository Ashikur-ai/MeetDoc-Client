import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../provider/AuthProvider';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const DocRegister = () => {
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();


    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/doctors', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Registration successful as doctor",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });

                                }
                            })
                        console.log('user profile info updated.')


                    })
                    .catch(error => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${error.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })
    };


    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>MeetDoc | Register</title>
            </Helmet>
            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">Work with use. Register as a Doctor and serve the community.</h1>
                       
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Full Name</label>
                                <input {...register("name", { required: true })} type="text" id="full-name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>

                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Photo URL</label>
                                <input {...register("photoURL", { required: true })} type="text" id="full-name" name="photoURL" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.photoURL && <span className='text-red-600'>PhotoURL is required</span>}
                            </div>


                            <div className="relative mb-4">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input {...register("email", { required: true })} type="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>

                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20

                                    })} name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}

                                {errors.password?.type === 'minLength' && <span>Password must be 6 characters.</span>}
                                {errors.password?.type === 'maxLength' && <span>Password must be 20 characters.</span>}

                            </div>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                            <p className="text-xs text-gray-500 mt-3">Already have an account? <Link to="/login">login</Link></p>
                        </form>
                        
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DocRegister;