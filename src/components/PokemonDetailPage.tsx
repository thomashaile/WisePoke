import React, { useEffect, useLayoutEffect, useState } from 'react';
import Nav from '../pages/Nav';
import { formattedSkills, getBackgroundColorFromType, getFormattedMoveSets, getPokemonImage } from '../pages/helpers/common';
import { useParams } from 'react-router-dom';
import Stats from './DetailPanes/Stats';
import { PokemonDetailInfo } from '../types/types';
import { usePokdex } from './Context/Pokedex';
import { Type } from '../types/types';
import MoveSet from './DetailPanes/MoveSet';
import Loading from '../pages/Loading';

interface Props {
    pokemon: any;
    loading:boolean;
    geslacht: string;
    about: string;
    skills: string;
    id: any;
}

const PokemonDetailPage = ({ id, pokemon, loading, skills, geslacht, about }: Props) => {
    const { pokemonIndex } = useParams();
    const { themeColor } = usePokdex();
    const { favorites, teamList, setFavorites, setTeamList } = usePokdex();
    const isInFavorite = favorites.some((e) => e.id === pokemon?.id) ? true : false;
    const isInMijnList = teamList.some((e) => e.id === pokemon?.id) ? true : false;

    const handleFavorite = () => {
        setFavorites(pokemon);
    };
    const handleMijnTeamLijst = () => {
        setTeamList(pokemon);
    };


    return (
        <div  className="w-full min-h-screen mx-auto" style={{ backgroundColor: `#${themeColor}` }}>{loading ? (<Loading />) : (
            <>
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
                        <div className="flex rounded-lg flex-col items-center justify-center shadow-lg bg-white mt-1 pb-2">
                            <div className="w-full flex px-2 my-2">
                                <p className="text-md ml-5 pr-2 text-gray-600">{about}</p>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                 <p className="text-md ml-5 text-gray-600">Types</p>
                                <div className="flex ml-2">
                                {pokemon.types.map((type: Type, idx: number) => {
                                return (
                                    <div
                                        key={idx}
                                        className="flex-no-shrink px-5 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                                        style={{ backgroundColor: `#${getBackgroundColorFromType(type.type.name)}` }}
                                    >
                                        {type.type.name}
                                    </div>
                                );
                            })}</div>  
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">Nummer</p>
                                <div className="text-lg">{pokemon.id}</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">Hoogte</p>
                                <div className="text-lg">{pokemon.height}m</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">gewicht</p>
                                <div className="text-lg">{pokemon.weight} Kg</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">geslacht</p>
                                <div className="text-lg">{geslacht}</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">vaardigheden</p>                                
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
                <div className="flex flex-col items-left pb-6 m-3">
                    <p className="text-white pt-2 font-semibold text-lg uppercase">MOVESET</p>
                    <MoveSet pokemonmoves={pokemon.moves} /> 
                </div>
            </div>
                <div className="h-10 mx-4 lg:hidden">
                <button  type="button"
                    className={`${isInMijnList ? 'bg-red-600' : 'bg-gray-800'}
             text-lg text-white text-center
             font-medium rounded-lg
             border-t-4 border-gray-600 shadow-sm capitalize
             fixed
             inset-x-0
             bottom-1
             p-4`} onClick={handleMijnTeamLijst}
                >{isInMijnList ? "verwijderen uit teamlijst" : "toevoegen aan mijn team"}
                </button>
               </div> 
            </>
           
            )}
        </div>
    );
};
export default PokemonDetailPage;
