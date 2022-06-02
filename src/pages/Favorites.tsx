import React, { useState, useEffect } from 'react';
import { Pokemon } from '../types/types';
import PokemonCard from '../components/PokemonCard';
import Nav from './Nav';
import { Store } from '../App';
import Loading from './Loading';

const Favorites = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadMyFavoritePokemons();
    }, []);

    const loadMyFavoritePokemons = () => {
        let dataFromStorage = window.localStorage.getItem(Store.myFavorites);
        let savedFavoriteList = typeof dataFromStorage === 'string' ? JSON.parse(dataFromStorage) : [];
        setPokemons(savedFavoriteList);
        setLoading(false);
    };
    return (
        <div className="flex-1 realtive md:py-10 min-h-screen bg-gradient-to-r from-[#65CB9A] to-[#15D0DC] md:px-5 p-3">
            <Nav />
            <h1 className="py-2 pl-5 text-white font-semibold text-3xl">Favorieten</h1>
            <div className="flex-1 flex flex-col mx-4 md:mx-3 md:space-y-4">
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
export default Favorites;
