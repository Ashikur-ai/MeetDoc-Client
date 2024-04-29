import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaTrash } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const MeetingRequest = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allMeetings = [], refetch } = useQuery({
        queryKey: ['allMeetings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5000/meetings`);
            return res.data;
        }
    })


    const handleRequest = (meeting) => {
        axiosPublic.patch(`/acceptRequest/${meeting._id}`)
            .then(res => {
                console.log(res.data)
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

    const handleDeleteRequest = (meeting) => {
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
                    <h1 className='text-3xl'>Total meetings: {allMeetings.length}</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Patient Name</th>
                                <th>Doctor Name</th>
                                <th>Venue</th>
                                <th>Payment Status</th>
                                <th>Accept Request</th>
                                <th>Delete Request</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allMeetings ? allMeetings?.map((meeting, index) =>
                                    <tr key={meeting._id}>
                                        <th>{index + 1}</th>
                                        <td>{meeting.name}</td>
                                        <td>{meeting.doc_name}</td>
                                        <td>
                                            {meeting.venue}

                                        </td>
                                        <td>
                                            {meeting.payment ? meeting.payment : <p className='text-red-600 text-2xl'>Not paid</p>}
                                        </td>
                                        <td>
                                            <button onClick={() => handleRequest(meeting)} className="btn btn-ghost btn-2xl text-4xl">{meeting?.status ? <p className='text-2xl text-green-600'>Accepted</p> : <IoCheckmarkDoneCircleSharp />}</button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteRequest(meeting)} className="btn btn-ghost btn-2xl"><FaTrash></FaTrash></button>
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

export default MeetingRequest;