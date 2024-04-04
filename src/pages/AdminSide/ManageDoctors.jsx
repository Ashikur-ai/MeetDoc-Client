import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageDoctors = () => {

    const axiosPublic = useAxiosPublic();
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await axiosPublic.get('/doctors');
            return res.data;
        }
    })

    const handleMakeDoctor = user => {
        axiosPublic.patch(`/users/doctor/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is upgraded to Doctor`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    const handleDeleteUser = (user) => {
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

                axiosPublic.delete(`/doctors/${user._id}`)
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
                <title>Dashboard | AllDoctors</title>
            </Helmet>
            <div className='flex justify-evenly'>
                <h1 className='text-3xl'>All Doctors</h1>
                <h1 className='text-3xl'>Total Doctors: {doctors.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role == 'doctor' ? "Doctor" : <button onClick={() => handleMakeDoctor(user)} className="btn btn-lg bg-orange-500 btn-2xl"><FaUsers className='text-white text-2xl'></FaUsers></button>
                                        }

                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-2xl"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;