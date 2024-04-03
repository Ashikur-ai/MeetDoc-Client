import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <section className="text-gray-600 body-font hero min-h-screen" >
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://i.ibb.co/YpTsBC6/home-doctor-appointment-service-500x500.webp" />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MeetDoc: Where Appointments Meet Simplicity.</h1>
                        <p className="mb-8 leading-relaxed">Simplify your scheduling, streamline your meetings, and elevate your productivity with our intuitive platform. From effortless appointment booking to seamless client communication, MeetDoc empowers you to take control of your schedule and focus on what truly matters. Join us and revolutionize the way you manage meetings today!</p>
                        <div className="flex justify-center">
                            <Link to="/register">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
                            </Link>
                            <Link to="/doctors">
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See Doctors</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;