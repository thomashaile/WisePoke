import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { PokemonDetailInfo, Type } from '../../types/types';
import { usePokdex } from '../Context/Pokedex';
import { getBackgroundColorFromType, getPokemonImage } from './helpers/common';

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
       // setDefaultPage(false); 
    };
   
    return (
        
        <div key={id} className="h-40 my-2 mx-1 block rounded-md bg-white p-2 text-black shadow">
            <div className="w-full flex shrink-0 justify-between py-2 pr-1">
                <div className="flex flex-row">
                    <div className="my-2 shrink-0">
                        <img className="w-20 object-cover" src={`${getPokemonImage(id)}`} alt="" />
                    </div>
                    <div className="flex flex-col mt-3 ml-2 pl-1 md:mr-1">
                        <div className="text-xl font-semibold capitalize md:text-xl">{pokemon.name}</div>
                        <h5 className="text-gray-600 text-lg">Nr. {id}</h5>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex-1 mr-1">
                        <div className="flex justify-center">
                            {pokemon.types.map((type: Type, idx: number) => {
                                return (
                                    <div
                                        key={idx}
                                        className="flex-no-shrink px-4 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                                        style={{ backgroundColor: `#${getBackgroundColorFromType(type.type.name)}` }}
                                    >
                                        {type.type.name}
                                    </div>
                                );
                            })} 
                        </div>
                    </div>
                    <Link to={`pokemon/${id}`}>
                    <button className="mx-1 mt-10" onClick={handleOnclick}>
                        <svg width="24" fill="currentColor" height="32" className="hover:text-gray-800 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
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
