import React, { useEffect, useState } from 'react';
import Header from './Header';
import { usePokdex } from '../Context/Pokedex';
import { useParams } from 'react-router-dom';
import { PokemonDetailInfo } from '../../types/types';
import DetailContentPane from './DetailContentPane';
import { getAllPokemonsData, getPokemonDetail } from '../../api/api';
import { getBackgroundColorFromType } from './helpers/common';

type Props = {}

const DetailPage = (props: Props) => {

const { pokemonIndex } = useParams();
const { isDefaultPage, pokemonList, setPokemonList } = usePokdex(); 
const [pokemon, setPokemon] = useState<PokemonDetailInfo | any>();
const [theme, setTheme] = useState<string>('c9c9c9'); //default
const [pokemonInfo, setPokemonInfo] = useState<PokemonDetailInfo | any>();
const [loading, setLoading] = useState<boolean>(true);
const [err, setErr] = useState<string>('');

useEffect(() => {
  loadData();
},[pokemonIndex]);

  let color = getBackgroundColorFromType(pokemon?.types[pokemon.types.length - 1].type.name);

  const loadData = async () => {
    setLoading(true);
    let selectedPokemon = pokemonList.find((p) => {
      return p.id == pokemonIndex;
    })
    const moreinfo = await getAdditionalInfo(pokemonIndex);
    setPokemon(selectedPokemon);
    setPokemonInfo(moreinfo);
    setLoading(false);
  } 

  const getAdditionalInfo = async(pokemonIndex:any) => {
    const data = await getPokemonDetail(`pokemon-species/${pokemonIndex}`);
    return data;
  }
  

   return (
    <div className={`relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden`} style={{ backgroundColor: `#${color}` }}>
    {pokemon ? 
    <DetailContentPane pokemon={pokemon} pokemonInfo={pokemonInfo} loading={loading}/>: null} 
  </div>
  )
}

export default DetailPage;