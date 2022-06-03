import React, { useState } from 'react';

interface SearchProps {
    onSearch: (index: any) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    
    const handleChange = (e:any) => {
        if (e.currentTarget.value.length === 0) {
        onSearch(null);
        }
        onSearch(e.currentTarget.value);
    };


    return (
        <div className="relative w-full max-w-lg pl-2 pr-1 my-1">
            <div className="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
                <svg className="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
            </div>
            <input onChange={handleChange}
                placeholder="Pokemon zoeken..." 
                className="block w-full bg-gray-200 text-lg focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-normal rounded-lg pl-16 pr-4 py-3"/>
            <div className="text-white absolute mt-3 cursor-pointer right-2 bottom-1 bg-gray-200 hover:bg-gray-300 rounded-lg px-7 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            </div>
        </div>
    );
};

export default Search;
