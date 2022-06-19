import React, { Fragment, useEffect } from 'react';

const SortModal = ({ onCancel }: any) => {
    useEffect(() => {});
    return (
        <>
            <div onClick={onCancel} className="fixed inset-0 bg-black opacity-70" />
            <div className="relative px-4 min-h-screen">
                <div className="bg-white rounded-lg p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4">
                    <div className="w-full flex justify-between text-center">
                        <p className="font-bold text-xl mt-6">Sorteren op</p>
                        <div className="rounded-full border border-gray-300 flex bg-gray-300 justify-center w-10 h-10 flex-shrink-0">
                            <button className="text-white" onClick={onCancel}>
                                X
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button
                            className="w-full flex justify-between px-4 py-3 bg-gray-200 rounded-lg font-semibold text-sm mt-2
           focus:border border-green-500"
                        >
                            <div className="flex align-text-bottom">
                                <div className="capitalize text-gray-500 ">
                                    <p className="text-xs">a</p>
                                    <p className="text-xs">z</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                                </svg>
                                <p className="text-md pl-1 align-bottom">Alfabestisch oplopend</p>
                            </div>
                            <div className="mr-3 invisible focus:visible">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold" viewBox="0 0 20 20" fill="green">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </button>
                        <button
                            className="w-full flex justify-between px-4 py-3 bg-gray-200 rounded-lg font-semibold text-sm mt-2
           focus:border border-green-500"
                        >
                            <div className="flex align-text-bottom">
                                <div className="capitalize text-gray-500 ">
                                    <p className="text-xs">a</p>
                                    <p className="text-xs">z</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                                </svg>
                                <p className="text-md pl-1 align-bottom">Alfabestisch aflopend</p>
                            </div>
                            <div className="mr-3 invisible focus:visible">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold" viewBox="0 0 20 20" fill="green">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </button>
                        <button
                            className="w-full flex justify-between px-4 py-3 bg-gray-200 rounded-lg font-semibold text-sm mt-2
           focus:border border-green-500"
                        >
                            <div className="flex align-text-bottom">
                                <div className="text-gray-500 ">
                                    <p className="text-xs">1</p>
                                    <p className="text-xs">2</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                                </svg>
                                <p className="text-md pl-1 align-bottom">Numeriek oplopend</p>
                            </div>
                            <div className="mr-3 invisible focus:visible">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold" viewBox="0 0 20 20" fill="green">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </button>
                        <button
                            className="w-full flex justify-between px-4 py-3 bg-gray-200 rounded-lg font-semibold text-sm mt-2
           focus:border border-green-500"
                        >
                            <div className="flex align-text-bottom">
                                <div className="text-gray-500 ">
                                    <p className="text-xs">1</p>
                                    <p className="text-xs">2</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                                </svg>
                                <p className="text-md pl-1 align-bottom">Numeriek aflopend</p>
                            </div>
                            <button className="mr-3 invisible">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold" viewBox="0 0 20 20" fill="green">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </button>
                        <button
                            className="w-full px-4 py-3 bg-black rounded-full font-semibold text-md mt-4 text-center text-white
             "
                        >
                            Toepassen
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SortModal;
