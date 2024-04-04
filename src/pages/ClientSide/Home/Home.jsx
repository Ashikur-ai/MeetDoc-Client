import React from 'react';
import Services from './Services';
import Banner from './Banner';
import Information from './Information';
import Navbar from '../../../Shared/Navbar';
import Testimonial from './Testimonial';
import Footer from '../../../Shared/Footer';
import Doctors from './Doctors';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>MeetDoc</title>
            </Helmet>
            
            {/* banner */}
            <Banner></Banner>

            {/* services */}
            <Services></Services>

            {/* information  */}
            <Information></Information>

            {/* testimonial  */}
            <Testimonial></Testimonial>

            {/* Doctors  */}
            <Doctors></Doctors>

            {/* Footer  */}
            
        </>
    );
};

export default Home;