import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Payments = () => {
    const payments = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Dashboard | All Payments</title>
            </Helmet>
            <div className='flex justify-evenly'>
                <h1 className='text-3xl'>All Payments</h1>
                <h1 className='text-3xl'>Total payments: {payments.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Doctor Email</th>
                            <th>Date</th>
                            <th>Transaction ID</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments ? payments?.map((payment, index) =>
                                <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.doc_email}</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.transactionId}</td>
                                    
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

export default Payments;