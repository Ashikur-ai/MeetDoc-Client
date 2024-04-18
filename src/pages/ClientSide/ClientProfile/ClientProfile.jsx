import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const ClientProfile = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <Helmet>
                <title>Dashboard | Profile </title>
            </Helmet>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={ user?.url } />
                        <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{ user?.name }</h1>
                        <p className="mb-8 leading-relaxed">{user?.email}</p>
                        <p className="mb-8 leading-relaxed">{user?.bio}</p>
                            
                        </div>
                </div>
            </section>
        </div>
    );
};

export default ClientProfile;