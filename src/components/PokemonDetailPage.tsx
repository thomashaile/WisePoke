import React, { useEffect, useLayoutEffect, useState } from 'react';
import Nav from '../pages/Nav';
import { getBackgroundColorFromType, getFormattedMoveSets, getPokemonImage } from '../pages/helpers/common';
import { useParams } from 'react-router-dom';
import Stats from './DetailPanes/Stats';
import { PokemonDetailInfo } from '../types/types';
import { usePokdex } from './Context/Pokedex';
import { Type } from '../types/types';

interface Props {
    pokemon: PokemonDetailInfo | any;
    geslacht: string;
    about: string;
    skills: string;
    type: Type[];
    id: number;
}

const PokemonDetailPage = ({ id, pokemon, geslacht, type, skills, about }: Props): JSX.Element => {
    const { pokemonIndex } = useParams();
    const { favorites, setFavorites, setTeamList } = usePokdex();

    //Check if it's in my favorites list
    const isInFavorite = favorites.some((e) => e.id === pokemon?.id) ? true : false;
    const handleFavorite = () => {
        setFavorites(pokemon);
    };

    return (
        <div>
            <div className="w-full min-h-screen mx-auto">
                <Nav handleFavorite={handleFavorite} id={pokemon.id} titel={pokemon?.name} favorite={isInFavorite} />
                <div className="text-left p-3">
                    <h1 className="text-3xl pl-3 text-white capitalize">{pokemon?.name}</h1>
                </div>
                <div className="flex items-center justify-center">
                    <a className="p-5 rounded-lg w-70" href="">
                        <img src={`${getPokemonImage(pokemonIndex || pokemon.id)}`} className="max-w-full rounded" alt="pkemon_img" />
                    </a>
                </div>
                <div className="p-2">
                    <p className="text-white font-semibold text-lg uppercase">Info</p>
                    <div className="flex flex-col items-left my-1">
                        <div className="flex rounded-lg flex-col items-center justify-center shadow-lg bg-white mt-1">
                            <div className="w-full flex px-3 my-2 text-md">{about}</div>
                            <div className="flex w-full rounded-lg shadow-lg bg-white pt-1 justify-between gap-3 capitalize">
                                <div className="w-28 flex py-1 px-3">
                                    {/*  {pokemon.types.map((aa: any, tkey: number) => {
                                        return (
                                            <div
                                                key={tkey}
                                                className="flex-no-shrink px-5 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                                                style={{ backgroundColor: `#${getBackgroundColorFromType(aa.type.name)}` }}
                                            >
                                                {aa.type.name}
                                            </div>
                                        );
                                    })}
                                    ; */}
                                </div>
                            </div>
                            <div className="flex w-full bg-white pt-1 gap-3 capitalize">
                                <div className="w-24 align-left py-1 pl-3 mr-4">
                                    <p className="text-md text-gray-600">Nummer</p>
                                </div>
                                <div className="text-lg">{pokemon.id}</div>
                            </div>
                            <div className="flex w-full bg-white pt-1 gap-3 capitalize">
                                <div className="w-24 align-left py-1 pl-3 mr-4">
                                    <p className="text-md text-gray-600">Hoogte</p>
                                </div>
                                <div className="text-lg">{pokemon.height}m</div>
                            </div>
                            <div className="flex w-full bg-white pt-1 gap-3 capitalize">
                                <div className="w-24 align-left py-1 pl-3 mr-4">
                                    <p className="text-lg text-gray-500">gewicht</p>
                                </div>
                                <div className="text-lg">{pokemon.weight} Kg</div>
                            </div>
                            <div className="flex w-full bg-white pt-1 gap-3 capitalize">
                                <div className="w-24 align-left py-1 pl-3 mr-4">
                                    <p className="text-md text-gray-500">geslacht</p>
                                </div>
                                <div className="text-lg">{geslacht}</div>
                            </div>
                            <div className="flex w-full bg-white pt-1 gap-3 capitalize">
                                <div className="w-24 align-left py-1 pl-3 mr-4">
                                    <p className="text-lg text-gray-500">vaardigheden</p>
                                </div>
                                <div className="text-lg">
                                    <h1>{skills}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-left m-3">
                    <p className="text-white font-semibold text-lg uppercase">statistieken</p>
                    <Stats baseStats={pokemon.stats} />
                </div>
                <div className="flex flex-col items-left m-3">
                    <p className="text-white font-semibold text-lg uppercase">MOVESET</p>
                    {/*  <MoveSet move={pokemon.moves.splice(1, 4)} /> */}
                </div>
                {/*<div></div> */}
                {/*  <MoveSet move={move} />  */}
            </div>
            <div className="mx-4 md:hidden">
                {' '}
                <button
                    className="bg-gray-700
             text-2xl text-white text-center
             border-t-4 border-gray-600 shadow-md rounded-md capitalize
             fixed
             inset-x-0
             bottom-1
             p-4"
                >
                    toevoegen aan mijn team
                </button>
            </div>
        </div>
    );
};
export default PokemonDetailPage;
