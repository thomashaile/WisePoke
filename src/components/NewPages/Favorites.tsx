import React, { useState, useEffect } from 'react';
import { Pokemon } from '../../types/types';
import PokemonCard from './PokemonCard';
import Nav from './Nav';
import { Store } from '../../App';
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
        <div className="flex-1 min-h-screen max-w-9xl bg-gradient-to-r from-[#65CB9A] to-[#15D0DC] px-1 overflow-hidden flex-wrap">
            <Nav />
            <h1 className="py-6 pl-5 text-white font-bold text-3xl">Favorieten</h1>
            <div className="w-full">
                {loading ? (
                    <Loading />
                ) : pokemons.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 m-1">
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
