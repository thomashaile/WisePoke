import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { PokemonDetailInfo, Type } from '../types/types';
import { getBackgroundColorFromType, getPokemonImage } from '../pages/helpers/common';
import { usePokdex } from './Context/Pokedex';

export interface PokemonCardProps {
    pokemon: any;
    id: string | number;
    setError?: (err: string) => {};
    setPage?: (page: boolean) => void;
}

const PokemonCard = ({ pokemon, setError, setPage, id }: PokemonCardProps) => {
    let navigate = useNavigate();

    const { setThemeColor, selectedPokemon, setDefaultPage, setSelectedPokemon } = usePokdex();
    const [theme, setTheme] = useState<string>('');
    const handleOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSelectedPokemon(pokemon);
        setThemeColor(theme); 
        //
        navigate(`pokemon/${id}`);
        //setDefaultPage(false); 
    };
    useEffect(() => {
        let color = getBackgroundColorFromType(pokemon?.types[pokemon.types.length - 1].type.name);
        setTheme(color);
    }, [pokemon]);

    return (
        <div key={id} className="h-32 my-2 mx-1 flex rounded-md bg-white p-2 text-black shadow">
            <div className="w-full flex shrink-0 justify-between py-2 pr-2">
                <div className="flex flex-row">
                    <div className="my-2">
                        <img className="w-20 object-cover" src={`${getPokemonImage(id)}`} alt="" />
                    </div>
                    <div className="flex flex-col mt-3 ml-3 pl-1 md:mr-2">
                        <div className="text-xl font-semibold capitalize md:text-xl">{pokemon.name}</div>
                        <h5 className="text-gray-600 text-lg">Nr. {id}</h5>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex-1 px-auto mr-5">
                        <div className="flex justify-end">
                            {pokemon.types.map((type: Type, idx: number) => {
                                return (
                                    <div
                                        key={idx}
                                        className="flex-no-shrink px-5 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                                        style={{ backgroundColor: `#${getBackgroundColorFromType(type.type.name)}` }}
                                    >
                                        {type.type.name}
                                    </div>
                                );
                            })} 
                        </div>
                    </div>
                    <Link to={`pokemon/${id}`}>
                    <button className="mx-1" onClick={handleOnclick}>
                        <svg width="32" fill="currentColor" height="32" className="hover:text-gray-800 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
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
