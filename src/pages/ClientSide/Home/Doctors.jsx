import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Doctors = () => {
    const axiosPublic = useAxiosPublic();
    const { data: doctors } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/doctors`);
            return res.data;
        }
    })

    console.log(doctors);
    let bestDoc = [];
    if (doctors) {
        bestDoc = doctors.slice(0, 4);
    }
    console.log(bestDoc)
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our expert doctors</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Meet Our Expert Doctors: Our team of highly qualified and experienced medical professionals is dedicated to providing exceptional care and expertise in their respective fields. From board-certified specialists to renowned surgeons, our doctors are committed to delivering personalized and compassionate healthcare to every patient. With expertise spanning various medical specialties, our team is here to address your unique healthcare needs and guide you on your journey to optimal health and wellness.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            bestDoc?.map(doctor =>
                                <div key={doctor._id} className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="     rounded w-full object-cover object-center mb-6" src={doctor?.url} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{doctor?.category}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{ doctor?.name }</h2>
                                    <p className="leading-relaxed text-base"></p>
                                </div>
                            </div>)
                        }
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Doctors;