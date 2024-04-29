import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrash } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaDonate } from 'react-icons/fa';


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

    const handlePayment = (meeting) => {
        axiosPublic.patch(`/acceptPayment/${meeting._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Request is accepted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
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
                            <th>Request Status</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                            <th>Make Payment</th>
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
                                        {meeting.status ? <p className='text-2xl text-green-600'>{meeting.status}</p> : <p>Not accepted yet!</p>}
                                    </td>
                                    <td>
                                        <button className="btn text-2xl btn-ghost btn-2xl">{meeting?.payment ? <p className='text-2xl text-green-600'>{meeting.payment}</p> : <p className='text-2xl text-red-600'>Unpaid</p>}</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteMeeting(meeting)} className="btn btn-ghost text-2xl btn-2xl"><FaTrash></FaTrash></button>
                                    </td>
                                    <td>
                                        <Link to={`/payment/${meeting._id}`}><button className="btn btn-primary text-xl btn-2xl">Pay</button></Link>
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