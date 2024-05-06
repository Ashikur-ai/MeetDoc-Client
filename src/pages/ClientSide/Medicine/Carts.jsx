import React, { useContext } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrash } from 'react-icons/fa6';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Carts = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { data: medicines = [], refetch } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/cartproduct/${user.email}`);
            return res.data;
        }
    })


    const handleDeleteMedicine = (medicine) => {
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

                axiosPublic.delete(`/cartItem/${medicine._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Medicine Deleted from database",
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
                <title>Dashboard | Manage Medicine</title>
            </Helmet>
            <div className='flex justify-evenly'>
                <h1 className='text-xl font-bold'>All Medicine</h1>
                <h1 className='text-xl font-bold'>Total Medicines: {medicines.length}</h1>
                <Link ><button className='btn-primary btn'>Cart</button></Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Medicine Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicines.map((medicine, index) =>
                                <tr key={medicine._id}>
                                    <th className=''>{index + 1}</th>
                                    <td className='text-sm font-bold'>{medicine.name}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 mask mask-squircle">
                                                <img src={medicine.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-sm font-bold'>৳{medicine.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteMedicine(medicine)} className="btn btn-ghost btn-2xl"><FaTrash></FaTrash></button>
                                    </td>
                                </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Carts;