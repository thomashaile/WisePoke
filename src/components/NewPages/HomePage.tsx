import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Banner from './RightStickyButton';
import { usePokdex } from '../Context/Pokedex';
import { PokemonDetailInfo } from '../../types/types';
import { getRandomNumber, getBackgroundColorFromType } from './helpers/common';
import { getAllPokemonsData, getPokemonDetail } from '../../api/api';
import HomeContentPage from './DetailContentPane';
import Loading from './Loading';
import DetailContentPane from './DetailContentPane';

function HomePage() {
  const { isDefaultPage, pokemonList, setPokemonList } = usePokdex();
  const [pokemon, setPokemon] = useState<PokemonDetailInfo | any>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetailInfo | any>();
  const [id, setId] = useState<number | string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>('c9c9c9'); //default
  const [error, setError] = useState<string>('');


 useEffect(() => {
    setId(getRandomNumber());
    loadNewData();
  },[])
 
  let color = getBackgroundColorFromType(pokemon?.types[pokemon.types.length - 1].type.name);

  const getAdditionalInfo = async(pokemonIndex:any) => {
  const data = await getPokemonDetail(`pokemon-species/${pokemonIndex}`);
  return data;
}

const loadAllPokemons = async() => {
  const data = await getAllPokemonsData();
  setPokemonList(data);
  return data;
}

const loadNewData = async () => {
  setLoading(true);
  let rundomNumber = getRandomNumber();
    const results = await loadAllPokemons();
    let selectedPokemon = results.find((p) => {
      return p.id === rundomNumber;
    })
    const moreinfo = await getAdditionalInfo(rundomNumber);
    setPokemon(selectedPokemon);
    setPokemonInfo(moreinfo);
    setLoading(false);
  }

  return (
      <div className={`relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden`} style={{ backgroundColor: `#${color}` }}>
        {pokemon ? 
        <DetailContentPane pokemon={pokemon} pokemonInfo={pokemonInfo} loading={loading}/>: null} 
      </div>
  );
}

export default HomePage;