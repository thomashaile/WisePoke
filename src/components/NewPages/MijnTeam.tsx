import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Pokemon } from '../../types/types';
import PokemonCard from './PokemonCard';
import { Store } from '../../App';
import Loading from './Loading';
import { usePokdex } from '../Context/Pokedex';

const MyTeam = () => {
    const { teamList } = usePokdex();
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
        <div className="flex-1 min-h-screen max-w-9xl bg-gradient-to-r from-[#46469C] to-[#7E32E0] px-1 overflow-hidden flex-wrap">
            <Nav />
            <h1 className="py-6 pl-5 text-white font-bold text-3xl">Favorieten</h1>
            <div className="w-full">
                {loading ? (
                    <Loading />
                ) : pokemons.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-3 md:">
                        {pokemons.map((pokemon: Pokemon) => {
                            return <PokemonCard pokemon={pokemon} id={pokemon.id} />;
                        })}
                    </div>
                ) : (
                    <div className="flex justify-center mt-5 border">
                        <span className="m-4 text-white text-center text-xl italic">Je favoriete lijst is leeg ...</span>
                    </div>
                )}
            </div>
        </div>
    );
};
export default MyTeam;
