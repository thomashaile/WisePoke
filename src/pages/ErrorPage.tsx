import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="px-4 lg:py-12">
                <div className="lg:gap-4 lg:flex">
                    <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                        <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Oeps!</span>Pagina niet gevonden
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">De pagina die u zoekt, bestaat niet.</p>
                        <Link to="/">
                            <button className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">Go home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
