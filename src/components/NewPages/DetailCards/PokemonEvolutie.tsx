import React from 'react';

type Props = {};

const PokemonEvolutie = (props: Props) => {
    return (
        <div className="flex flex-col items-left mt-3 space-y-1">
            <p className="ml-3 text-white font-semibold text-lg uppercase">Evolutie</p>
            <div className="w-sm h-24 bg-white rounded-xl shadow-lg flex items-center ">{/** pokemon cards */}</div>
            <div className="w-sm h-24 bg-white rounded-xl shadow-lg flex items-center ">{/** pokemon cards */}</div>
        </div>
    );
};

export default PokemonEvolutie;
