import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const UpdateClientProfile = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        
        const url = form.image_url.value;
        const bio = form.bio.value;

        const data = { email, url, bio };

        axiosPublic.patch('/updateUser', data)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Your profile is upgraded`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch()


    }
    return (
        <div>
            <Helmet>
                <title>Dashboard | Update User</title>
            </Helmet>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

                    <div className="w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Complete your profile</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" value={user.displayName} readOnly name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>


                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="text" id="email" value={user.email} readOnly name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            

                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Your image url</label>
                                <input type="text" name="image_url" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Provide info about you</label>
                                <textarea className="textarea textarea-success w-full" name='bio'></textarea>
                            </div>

                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Complete Profile</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpdateClientProfile;