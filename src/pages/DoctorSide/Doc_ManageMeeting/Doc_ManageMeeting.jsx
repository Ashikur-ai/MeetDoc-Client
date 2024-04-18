import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa6';


const Doc_ManageMeeting = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data: meetings = [], refetch } = useQuery({
        queryKey: ['meetings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/getDocMeeting/${user.email}`);
            return res.data;
        }
    })

    
    

    return (
        <div>
            <Helmet>
                <title>
                    Dashboard | ManageMeeting
                </title>
            </Helmet>
            <div>
                <Helmet>
                    <title>Dashboard | All Meetings</title>
                </Helmet>
                <div className='flex justify-evenly'>
                    <h1 className='text-3xl'>All Meetings</h1>
                    <h1 className='text-3xl'>Total meetings: {meetings.length}</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Patient Name</th>
                                <th>Time</th>
                                <th>Venue</th>
                                <th>Problem</th>
                                <th>Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                meetings ? meetings?.map((meeting, index) =>
                                    <tr key={meeting._id}>
                                        <th>{index + 1}</th>
                                        <td>{meeting.name}</td>
                                        <td>{meeting.time}</td>
                                        <td>
                                            {meeting.venue}

                                        </td>
                                        <td>
                                            {meeting.info}
                                        </td>
                                        <td>
                                            {meeting.status ? <>{meeting.status}</> : <p>Not accepted yet!</p>}
                                        </td>
                                        
                                    </tr>)
                                    :
                                    <></>
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Doc_ManageMeeting;