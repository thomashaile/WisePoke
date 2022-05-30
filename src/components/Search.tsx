import React, { useState } from 'react';

interface SearchProps {
    onSearch: (index: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    const [searchInput, setSearchInput] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value);
        onSearch(searchInput);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onSearch(searchInput);
        setSearchInput('');
    };
    return (
        <div className="relative mb-2">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            <input
                onChange={handleChange}
                className="block p-4 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-200 text-lg"
                value={searchInput}
                placeholder="Pokemon zoeken..."
            />
            <div className="md:hidden text-white absolute cursor-pointer right-2.5 bottom-2.5 bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            </div>
            {/* for screens */}
            <button className="hidden text-hite font-semibold absolute cursor-pointer right-2.5 bottom-2.5 bg-blue-400 hover:bg-blue-700 rounded-lg px-4 py-2 md:block" onClick={handleClick}>
                Search
            </button>
        </div>
    );
};

export default Search;
