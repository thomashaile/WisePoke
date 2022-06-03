import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonDetailInfo } from '../../types/types';
import Loading from './Loading';

export interface PokedexProps {
    pokemonList: PokemonDetailInfo[];
    loading: boolean;
}

const MainContent = ({ loading, pokemonList }: PokedexProps) => {
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                    <div className="space-y-4">
                    {
                        pokemonList.map((pokemon: PokemonDetailInfo, idx: number) => {
                        return <PokemonCard key={idx+1} pokemon={pokemon} id={pokemon.id} />;
                    })}
                </div>
            )}
        </div>
    );
};
export default MainContent;
