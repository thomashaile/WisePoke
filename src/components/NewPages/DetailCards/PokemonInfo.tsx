import React, { useEffect, useState } from 'react';
import { PokemonDetailInfo, Type } from '../../../types/types';
import { formattedSkills, getBackgroundColorFromType } from '../helpers/common';

interface InfoCardProps {
    pokemon: PokemonDetailInfo;
    pokemonInfo: any;
}

const PokemonInfo = ({ pokemon, pokemonInfo }: InfoCardProps) => {
    const [about, setAbout] = useState<string>('Nothing to show here');
    const [skills, setSkills] = useState<string>('');

    useEffect(() => {
        //format about
        console.log(pokemon.id);
        let info = pokemonInfo.flavor_text_entries.some((flavor: any) => {
            if (flavor.language.name === 'en') {
                setAbout(flavor.flavor_text);
            }
        });

        setSkills(formattedSkills(pokemon.abilities));
    }, []);

    //in feet
    const hoogte = Math.round((pokemon.height * 0.328084 + 0.00001) * 100) / 100;
    //gender ratio is ?

    return (
        <div className="flex flex-col items-left m-3">
            <p className="text-white pl-3 font-semibold text-lg uppercase">Info</p>
            <div className="flex rounded-lg flex-col items-left justify-center shadow-lg bg-white my-1 p-4">
                <p className="text-lg">{about}</p>
                <div className="grid grid-cols-2 mt-4 capitalize">
                    <div className="w-20 text-gray-600 text-lg space-y-2">
                        <p>Types</p>
                        <p>Nummer</p>
                        <p>Hoogte</p>
                        <p>gewicht</p>
                        <p>geslacht</p>
                        <p>vaardigheden</p>
                    </div>
                    <div className="flex-1 text-lg space-y-2">
                        <div className="flex mr-2">
                            {pokemon.types.map((type: Type, idx: number) => {
                                return (
                                    <div
                                        key={idx}
                                        className="flex-no-shrink px-5 py-2 ml-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                                        style={{ backgroundColor: `#${getBackgroundColorFromType(type.type.name)}` }}
                                    >
                                        {type.type.name}
                                    </div>
                                );
                            })}
                        </div>
                        <p>{pokemon.id}</p>
                        <p>{pokemon.height}ft</p>
                        <p>{pokemon.weight} ibs</p>
                        <p>{pokemonInfo.gender_rate} M:F ratio</p>
                        <p>{skills}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;
