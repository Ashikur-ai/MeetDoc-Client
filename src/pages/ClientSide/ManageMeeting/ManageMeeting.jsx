import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../provider/AuthProvider';


const ManageMeeting = () => {
    // const meetings = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    // const { refetch } = useQuery({});
    const { data: meetings = [], refetch } = useQuery({
        queryKey: ['meetings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/getMeeting/${user.email}`);
            return res.data;
        }
    })

    const handleDeleteMeeting = (meeting) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/meetings/${meeting._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })


            }
        });
    }
    return (
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
                            <th>Doctor Name</th>
                            <th>Time</th>
                            <th>Venue</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meetings ? meetings?.map((meeting, index) =>
                                <tr key={meeting._id}>
                                    <th>{index + 1}</th>
                                    <td>{meeting.doc_name}</td>
                                    <td>{meeting.time}</td>
                                    <td>
                                        {meeting.venue}

                                    </td>
                                    <td>
                                        {meeting.status ? <>{meeting.status}</> : <p>Not accepted yet!</p>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteMeeting(meeting)} className="btn btn-ghost btn-2xl"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)
                                :
                                <></>
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMeeting;