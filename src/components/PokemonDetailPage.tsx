import React, { useEffect, useLayoutEffect, useState } from 'react';
import Nav from '../pages/Nav';
import { formattedSkills, getBackgroundColorFromType, getFormattedMoveSets, getPokemonImage } from '../pages/helpers/common';
import { useParams } from 'react-router-dom';
import Stats from './DetailPanes/Stats';
import { PokemonDetailInfo } from '../types/types';
import { usePokdex } from './Context/Pokedex';
import { Type } from '../types/types';
import MoveSet from './DetailPanes/MoveSet';

import SidePage from './SidePage'
import DetailCard from './DetailCard';
import PokemonImage from './DetailPanes/PokemonImage';
import PokemonInfo from './DetailPanes/PokemonInfo';
import PokemonMoveSet from './DetailPanes/PokemonMoveSet';
import PokemonEvolutie from './DetailPanes/PokemonEvolutie';
import PokemonStatstieken from './DetailPanes/PokemonStatstieken';
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
    const { selectedPokemon, favorites, teamList, pokemonList, setFavorites, setTeamList, themeColor } = usePokdex();
    
   const isInFavorite = favorites.some((e) => e.id === pokemon?.id) ? true : false;
   const isInMijnList = teamList.some((e) => e.id === pokemon?.id) ? true : false;

    const Cards = [
      { name: "image", element: <PokemonImage id={id}/>},
        { name: "Statistieken", element: <PokemonStatstieken baseStats={pokemon.stats}/>},
        { name: "Info", element: <PokemonInfo pokemon={pokemon} id={id} about={about} geslacht={geslacht} skills={skills}/> },
        { name: "MoveSet", element: <PokemonMoveSet  movelist={pokemon.moves}/>},
        { name: "evolutie", element: <PokemonEvolutie />},
      ];
    useEffect(()=>{
   console.log(pokemon);
}, [pokemonIndex])
const handleFavorite = () => {
    setFavorites(pokemon);
};
const handleMijnTeamLijst = () => {
    setTeamList(pokemon);
};

return (
    <div className="max-w-4xl flex-1" style={{ backgroundColor: `#${themeColor}` }}> 
        <Nav handleFavorite={handleFavorite} id={pokemon?.id} titel={pokemon?.name} favorite={isInFavorite} />       
         <div className="min-h-32 pl-8 mb-6 lg:w-full">
              <h1 className="text-3xl text-white font-bold capitalize">{pokemon?.name}</h1>
          </div>   
          <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2">
          {Cards.length > 0 ? Cards.map((card:any, index:number) => {
              return <div key={index}>{card.element}</div>
          }): null}
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
  </div>
)
}
export default PokemonDetailPage;