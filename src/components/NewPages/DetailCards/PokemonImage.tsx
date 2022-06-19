import React from 'react';
import { PokemonDetailInfo } from '../../../types/types';
import { getPokemonImage } from '../helpers/common';

interface ImageCardProps {
    id: number | string;
}

const PokemonImage = ({ id }: ImageCardProps) => {
    return (
        <div className="flex justify-center mt-2">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={`${getPokemonImage(id)}`} alt="pokemon_image" />
            </div>
        </div>
    );
};

export default PokemonImage;
