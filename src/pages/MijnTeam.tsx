import React, { useState, useEffect } from 'react';
import { Pokemon } from '../types/types';
import PokemonCard from '../components/PokemonCard';
import Loading from './Loading';
import Nav from './Nav';
import { Store } from '../App';

const MyTeam = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadMyFavoritePokemons();
    }, []);

    const loadMyFavoritePokemons = () => {
        let dataFromStorage = window.localStorage.getItem(Store.myTeamList);
        let myTeamList = typeof dataFromStorage === 'string' ? JSON.parse(dataFromStorage) : [];
        setPokemons(myTeamList);
        setLoading(false);
    };
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-[#46469C] to-[#7E32E0] px-3 p-3 md:px-20">
            <Nav />
            <h1 className="py-2 pl-5 text-white font-semibold text-3xl">Mijn team</h1>
            {loading ? (
                <Loading />
            ) : pokemons.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 m-3">
                    {pokemons.map((pokemon: Pokemon) => {
                        return <PokemonCard pokemon={pokemon} id={pokemon.id} />;
                    })}
                </div>
            ) : (
                <div className="flex justify-center mt-5 border">
                    <span className="m-4 text-white text-xl italic">Jullie team Pokemon-lijst is leeg ...</span>
                </div>
            )}
        </div>
    );
};
export default MyTeam;
