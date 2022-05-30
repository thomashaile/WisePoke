import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePokdex } from '../components/Context/Pokedex';
import { isPokemonInDelist } from './helpers/common';

interface Props {
    favorite?: boolean;
    titel?: string;
    handleFavorite?: () => void;
    id?: number;
}

const Nav = ({ handleFavorite, titel, id, favorite }: Props): JSX.Element => {
    const { pokemonIndex } = useParams();
    let navigate = useNavigate();

    return (
        <nav className="top-0 sticky bg-inherit text-white font-bold">
            <div className="flex p-3 justify-between items-bottom">
                <div className="flex items-center cursor-pointer justify-end" onClick={() => navigate('/')}>
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <p className="text-xl">Terug</p>
                </div>
                {titel ? (
                    <>
                        <h1 className="capitalize text-center text-3xl text-white">{titel}</h1>
                        <div className="cursor-pointer" onClick={handleFavorite}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill={favorite ? 'red' : 'currentColor'}>
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </>
                ) : null}
            </div>
        </nav>
    );
};

export default Nav;
