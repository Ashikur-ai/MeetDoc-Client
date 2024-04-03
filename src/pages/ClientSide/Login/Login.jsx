import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
        })
    }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Connect with your Doctor effortlessly and manage meetings seamlessly</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome back! Please sign in to access your account and manage your appointments seamlessly. Forgot your password? No worries, we've got you covered—simply click on the 'Forgot Password?' link to reset it.</p>
                    </div>
                    <form action="" onSubmit={handleLogin}>
                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            
                            <div className="relative flex-grow w-full">
                                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative flex-grow w-full">
                                <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" id="full-name" name="password" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;