import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';
import toast from 'react-hot-toast';


const AddMedicine = () => {

    const axiosPublic = useAxiosPublic();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        

        const name = form.medicine_name.value;
        const image = form.image.value;
        const price = form.price.value;
        const category = form.category.value;

        const data = { name, image, price, category };
        console.log(data);

        axiosPublic.post('/medicine', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Medicine added to database successfully`,
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
                <title>Dashboard | Add Medicine</title>
            </Helmet>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">

                    <div className="w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Medicine</h2>
                        <form action="" onSubmit={handleSubmit}>
                            
                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Medicine Name</label>
                                <input type="text" name="medicine_name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className='relative mb-4'>
                                <label className="leading-7 text-sm text-gray-600" >Medicine Category</label>

                                <select className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" name="category">
                                    <option selected value="">Select a category</option>
                                    <option value="Orthopedic">Orthopedic</option>
                                    <option value="Gastroenterology">Gastroenterology</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Neurology">Neurology</option>
                                </select>
                            </div>



                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Image url</label>
                                <input type="text" name="image" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative mb-4">
                                <label className="leading-7 text-sm text-gray-600">Price</label>
                                <input type="text" id="name"  name="price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            

                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Medicine</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddMedicine;