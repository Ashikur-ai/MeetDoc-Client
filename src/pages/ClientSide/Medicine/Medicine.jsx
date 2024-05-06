import React, { useContext } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const Medicine = () => {
    
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data: medicines = [], refetch } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const res = await axiosPublic.get('/medicines');
            return res.data;
        }
    })

    const addToCart = (medicine) => {
        const email = user.email;
        const name = medicine.name;
        const image = medicine.image;
        const price = medicine.price;
        const data = { email, name, image, price };
        
        axiosPublic.post('/cart', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Medicine added to cart successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch()
    }


    return (
        <div>
            <Helmet>
                <title>Dashboard | Medicine</title>
            </Helmet>
            
            <section className="text-gray-600 body-font">
                <div className="container py-24 mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 ">
                        {
                            medicines?.map(medicine => <div key={ medicine._id } className="p-4 w-full  shadow-2xl rounded-xl  ">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ medicine.image } />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{medicine.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{medicine.name}</h2>
                                    <div className='flex justify-between'>
                                        <p className="mt-1">৳{medicine.price}</p>
                                        <button onClick={()=>addToCart(medicine)} className='btn btn-primary'>Cart</button>
                                    </div>
                                </div>
                            </div>)
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Medicine;