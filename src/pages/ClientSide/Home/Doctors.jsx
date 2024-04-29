import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

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

                    <div className="grid lg:grid-cols-4">
                        {
                            bestDoc?.map(doctor =>

                                <div key={doctor._id} className="card m-5 glass">
                                    <Link to={`/docDetails/${doctor.email}`}><figure><img className='' src={doctor?.url} alt="car!" /></figure></Link>
                                    <div className="card-body">
                                        <h2 className="card-title">{doctor.name}</h2>
                                        <p>{doctor.category}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>


                </div>
            </section>
        </>
    );
};

export default Doctors;