import React from 'react'
import { PokemonDetailInfo } from '../../types/types';
import { usePokdex } from '../Context/Pokedex';
import RightStickyButton from './RightStickyButton';
import Nav from './Nav';
import PokemonEvolutie from './DetailCards/PokemonEvolutie';
import PokemonImage from './DetailCards/PokemonImage';
import PokemonInfo from './DetailCards/PokemonInfo';
import PokemonMoveSet from './DetailCards/PokemonMoveSet';
import PokemonStatstieken from './DetailCards/PokemonStatstieken';
import Loading from './Loading';

type Props = {
    pokemon: PokemonDetailInfo;
    pokemonInfo: any,
    loading: boolean;
}

const DetailContentPane = ({ pokemon, pokemonInfo, loading }: Props) => {
  const {  favorites, teamList, setFavorites, setTeamList, } = usePokdex();
  
 const isInFavorite = favorites.some((e) => e.id === pokemon?.id) ? true : false;
 const isInMijnList = teamList.some((e) => e.id === pokemon?.id) ? true : false;

  const Cards = [
    { name: "image", element: <PokemonImage id={pokemon.id}/>},
    { name: "Statistieken", element: <PokemonStatstieken baseStats={pokemon.stats}/>},
    { name: "Info", element: <PokemonInfo pokemon={pokemon} pokemonInfo={pokemonInfo}/> },
    { name: "MoveSet", element: <PokemonMoveSet  movelist={pokemon.moves}/>},
    { name: "evolutie", element: <PokemonEvolutie />}, 
    ];
    console.log(pokemon);

    const handleFavorite = () => {
      setFavorites(pokemon);
  };
  const handleMijnTeamLijst = () => {
      setTeamList(pokemon);
  };
    
  return (
      <>
      {loading ? <Loading /> : 
          <div className="px-4 px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <Nav handleFavorite={handleFavorite} titel={pokemon?.name} favorite={isInFavorite} />       
                <div className="min-h-32 pl-8 mb-6 lg:w-full">
                    <h1 className="text-3xl text-white font-bold capitalize">{pokemon.name}</h1>
                </div>
              <div className="grid grid-cols-2 gap-x-6">
            {Cards.length > 0 ? Cards.map((card:any, index:number) => {
                    return <div key={index}>{card.element}</div>
                }): null} 
              </div>
          
          <RightStickyButton isInMijnList={isInMijnList} handleMijnTeamLijst={handleMijnTeamLijst}/>
          </div>
      }
</>
  )
}

export default DetailContentPane