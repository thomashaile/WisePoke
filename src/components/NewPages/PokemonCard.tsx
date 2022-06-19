import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PokemonDetailInfo, Type } from '../../types/types';
import { usePokdex } from '../Context/Pokedex';
import { getBackgroundColorFromType, getFormattedNumber, getPokemonImage } from './helpers/common';

export interface PokemonCardProps {
    pokemon: any;
    id: string | number;
    setError?: (err: string) => {};
    setPage?: (page: boolean) => void;
}

const PokemonCard = ({ pokemon, setError, setPage, id }: PokemonCardProps) => {
    let navigate = useNavigate();
    const { setDefaultPage } = usePokdex();

    const handleOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        navigate(`pokemon/${id}`);
        setDefaultPage(false);
    };

    return (
        <div className="w-full max-h-22 my-2 bg-white rounded-xl shadow-lg">
            <div className="flex justify-items-end shrink-0 p-2">
                <img className="my-2 mx-0 h-20 md:w-10 shrink-0" src={`${getPokemonImage(id)}`} alt="pokemon-image" />
                <div className="py-2 pl-2 text-center">
                    <p className="text-xl text-black font-bold capitalize">{pokemon.name}</p>
                    <p className="text-slate-500 text-left text-lg font-normal">Nr. {getFormattedNumber(id)}</p>
                </div>
                <div className="flex flex-1 justify-end pt-3">
                    <div className="mr-1">
                        <div className="flex justify-center">
                            {pokemon.types.map((type: Type, idx: number) => {
                                return (
                                    <div
                                        key={idx}
                                        className="flex-no-shrink px-2 ml-1 py-1 text-lg shadow-sm hover:shadow-lg capitalize border-1 border-red-500 text-white rounded-full"
                                        style={{ backgroundColor: `#${getBackgroundColorFromType(type.type.name)}` }}
                                    >
                                        {type.type.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Link to={`pokemon/${id}`}>
                        <button className="pl-3" onClick={handleOnclick}>
                            <svg width="24" fill="currentColor" height="32" className="hover:text-gray-800 text-gray-400 font-bold" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;
