import React from 'react';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../types/types';
import Loading from '../pages/Loading';

export interface PokedexProps {
    pokemonList: Pokemon[];
    loading: boolean;
}

const Main = ({ loading, pokemonList }: PokedexProps) => {
    return (
        <div className="w-full">
            {loading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {
                        pokemonList.map((pokemon: Pokemon, idx: number) => {
                        return <PokemonCard key={idx+1} pokemon={pokemon} id={pokemon.id} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default Main;
