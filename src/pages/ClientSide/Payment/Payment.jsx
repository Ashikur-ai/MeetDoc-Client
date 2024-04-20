import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const meeting = useLoaderData();
    console.log(meeting);
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
    return (
        <div className='w-2/4 mx-auto mt-10'>
            <Elements stripe={stripePromise}>
                <CheckoutForm meeting={meeting}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;