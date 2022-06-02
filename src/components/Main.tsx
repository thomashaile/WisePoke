import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../types/types';
import Loading from '../pages/Loading';
import { useNavigate } from 'react-router-dom';

export interface PokedexProps {
    pokemonList: Pokemon[];
    loading: boolean;
}


const Main = ({ loading, pokemonList }: PokedexProps) => {
   //console.log(pokemonList);
    useEffect(() => {
        //navigate("/" , {replace: true})
      //  console.log(navigate);
    })
    return (
        <div className="w-full">
            {loading ? (
                <Loading />
            ) : (
                <div>
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
