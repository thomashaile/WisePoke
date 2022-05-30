import React from 'react';
import { getBackgroundColorFromType } from '../../pages/helpers/common';
import { PokemonDetailInfo } from '../../types/types';

interface pokeInfoProps {
    titel?: string;
    pokemon: PokemonDetailInfo | any;
    skills: string;
    geslacht: string;
    about: string;
}
function pokeInfoPane({ pokemon, about, skills, geslacht }: pokeInfoProps) {
    return (
        <div className="pl-2">
            <p className="text-white font-semibold text-lg uppercase">Info</p>
            <div className="flex flex-col items-left my-1">
                <div className="flex rounded-lg flex-col items-center justify-center shadow-lg bg-white mt-1">
                    <div className="w-full flex px-3 my-2 text-md">{about}</div>
                    <div className="flex w-full rounded-lg shadow-lg bg-white pt-1 justify-between gap-3 capitalize">
                        <div className="w-28 py-1 px-3">
                            <p className="text-lg text-enter text-gray-500">type</p>
                        </div>
                        <div className="flex-1 py-1">
                            <div className="flex flex-start">
                                {pokemon.types.map((type: any, idx: number) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="relative flex-no-shrink px-5 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                                            style={{ backgroundColor: `#${getBackgroundColorFromType}` }}
                                        >
                                            {type.type.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full rounded-lg shadow-lg bg-white pt-1 gap-3 capitalize">
                        <div className="w-24 align-left py-1 pl-3 mr-4">
                            <p className="text-md text-gray-600">Nummer</p>
                        </div>
                        <div className="text-lg">{pokemon.id}</div>
                    </div>
                    <div className="flex w-full rounded-lg shadow-lg bg-white pt-1 gap-3 capitalize">
                        <div className="w-24 align-left py-1 pl-3 mr-4">
                            <p className="text-md text-gray-600">Hoogte</p>
                        </div>
                        <div className="text-lg">{pokemon.height}m</div>
                    </div>
                    <div className="flex w-full rounded-lg shadow-lg bg-white pt-1 gap-3 capitalize">
                        <div className="w-24 align-left py-1 pl-3 mr-4">
                            <p className="text-lg text-gray-500">gewicht</p>
                        </div>
                        <div className="text-lg">{pokemon.weight} Kg</div>
                    </div>
                    <div className="flex w-full rounded-lg shadow-lg bg-white pt-1 gap-3 capitalize">
                        <div className="w-24 align-left py-1 pl-3 mr-4">
                            <p className="text-md text-gray-500">geslacht</p>
                        </div>
                        <div className="text-lg">{geslacht}</div>
                    </div>
                    <div className="flex w-full rounded-lg shadow-lg bg-white pt-1 gap-3 capitalize">
                        <div className="w-24 align-left py-1 pl-3 mr-4">
                            <p className="text-lg text-gray-500">vaardigheden</p>
                        </div>
                        <div className="text-lg">
                            <h1>{skills}</h1>;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default pokeInfoPane;
