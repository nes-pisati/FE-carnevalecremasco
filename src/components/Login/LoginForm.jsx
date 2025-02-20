import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
    const API_URL = process.env.REACT_APP_API_URL;
    
    const [login, setLogin] = useState({})
    const navigate = useNavigate()

    const onChangeInput = (e) => {
        const { name, value } = e.target;

        setLogin({
            ...login,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post(`${API_URL}/user/login`, login)
            .then(response => {
                localStorage.setItem('userLogin', response.data)
                navigate('/dashboard')
            }).catch(error => console.error(error))
    }

    return (
        <>
            <section className="bg-gray-900 h-screen flex items-center justify-center px-6">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 w-80 sm:w-96">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form className="space-y-4 md:space-y-6 flex flex-col" action="#" onSubmit={handleSubmit}>
                                <div className="w-24 h-24 bg-white rounded-full overflow-hidden self-center">
                                    <img className="w-full h-full object-contain" src="https://www.carnevaledicrema.it/wp-content/uploads/2019/05/logo_2020_carnevale_cremasco.jpg" alt="logo carnevale cremasco" />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChangeInput} />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChangeInput} />
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 align-baseline">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}