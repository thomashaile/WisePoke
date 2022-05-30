import React from 'react';
import ErrorPage from '../pages/ErrorPage';
/* import Pokedex from './Pokedex'; */
import PokemonCard from './PokemonCard';
import { Pokemon } from '../types/types';
import Loading from '../pages/Loading';

export interface PokedexProps {
    pokemonList: Pokemon[];
    loading: boolean;
    handleSelect?: (idx: any) => void;
    setError?: (err: string) => void;
}

const Main = ({ loading, pokemonList, handleSelect, setError }: PokedexProps) => {
    return (
        <div className="w-full">
            {loading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {pokemonList.map((pokemon: Pokemon, idx: number) => {
                        return <PokemonCard pokemon={pokemon} id={pokemon.id} handleSelect={handleSelect} />;
                    })}
                </div>
            )}
        </div>
    );
};
/* 
 pokemonList.map((pokemon: Pokemon, idx: number) => {
                    return <PokemonCard pokemon={pokemon} idx={idx + 1} handleSelect={handleSelect} />;
                }) */

export default Main;
