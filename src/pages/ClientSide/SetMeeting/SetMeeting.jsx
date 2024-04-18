import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const SetMeeting = () => {
    const { user } = useContext(AuthContext);
    const doctor = useLoaderData();
    const axiosPublic = useAxiosPublic();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const doc_name = form.doc_name.value;
        const doc_email = form.doc_email.value;
        const fee = form.fee.value;
        const time = form.time.value;
        const venue = form.venue.value;
        const info = form.info.value;

        const data = { name, email, doc_name, doc_email, fee, time, venue, info };
        
        axiosPublic.post('/setMeeting', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Your meeting is submitted successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
            }
            })
        .catch()
        
    }
    return (
        <div>
            <div className="w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Complete your profile</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Your Name</label>
                        <input type="text" id="name" value={user?.displayName} readOnly name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>


                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Your Email</label>
                        <input type="text" id="email" value={user?.email} readOnly name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Doctor Name</label>
                        <input type="text" value={doctor?.name} readOnly name="doc_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Doctor Email</label>
                        <input type="text" value={doctor?.email} readOnly name="doc_email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>


                    

                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Fee</label>
                        <input type="text" value={doctor?.fee} name="fee" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    

                    <div className='relative mb-4'>
                        <label className="leading-7 text-sm text-gray-600" >Time</label>

                        <select className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="time">
                            <option selected value="">Select a timeslot</option>
                            <option value="9:00 to 10:00 am">9:00 to 10:00 am</option>
                            <option value="12:00 to 1:00 pm">12:00 to 1:00 pm</option>
                            <option value="3:00 to 4:00 pm">3:00 to 4:00 pm</option>
                        </select>
                    </div>

                    <div className='relative mb-4'>
                        <label className="leading-7 text-sm text-gray-600" >Select Venue</label>

                        <select className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="venue">
                            <option selected value="">Select a venue</option>
                            <option value="Dhaka Medical College">Dhaka Medical College</option>
                            <option value="Mirpur Diagonostic Center">Mirpur Diagonostic Center</option>
                            <option value="Apllo Hospital">Apllo Hospital</option>
                        </select>
                    </div>

                    

                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Provide info about sickness</label>
                        <textarea className="textarea textarea-success w-full" name='info'></textarea>
                    </div>

                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SetMeeting;