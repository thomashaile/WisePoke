import React from 'react';
import PokemonCard from './PokemonCard';
import { PokedexProps } from './Main';
import { Pokemon } from '../types/types';

const Pokedex = ({ loading, pokemonList }: PokedexProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {loading ? (
                <div>Please Wait, Loading Pokemons...</div>
            ) : (
                pokemonList.map((pokemon: Pokemon) => {
                    return <PokemonCard pokemon={pokemon} id={pokemon.id} />;
                })
            )}
        </div>
    );
};

export default Pokedex;
