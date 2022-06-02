import React, { useState, useEffect } from 'react'

import { useLocation, useParams } from "react-router-dom";
import { usePokdex } from './Context/Pokedex';
import { Pokemon, PokemonDetailInfo } from '../types/types';
import SidePage from './SidePage'
import DetailCard from './DetailCard';
import PokemonImage from './DetailPanes/PokemonImage';
import PokemonInfo from './DetailPanes/PokemonInfo';
import PokemonMoveSet from './DetailPanes/PokemonMoveSet';
import PokemonEvolutie from './DetailPanes/PokemonEvolutie';
import PokemonStatstieken from './DetailPanes/PokemonStatstieken';
import Nav from '../pages/Nav';
import { formattedSkills, getRandomNumber } from '../pages/helpers/common';
import { getPokemonDetail } from '../api/api';
import Loading from '../pages/Loading';
import PokemonDetailPage from './PokemonDetailPage';

const Home = () => {

   const { pokemonList, isDefaultPage, themeColor, setPokemonList, setSelectedPokemon, selectedPokemon } = usePokdex();
   
   const [pokemon, setPokemon] = useState<Pokemon>();
   const [id, setId] = useState<number | string>(selectedPokemon.id);
   const [about, setAbout] = useState<any>('No Information');
   const [stats, setStats] = useState<any>('No Information');
   const [movelist, setMovelist] = useState<any[]>(['No Information']);
   //const [about, setAbout] = useState<any>('No Information');
   const [loading, setLoading] = useState<boolean>(true);
   const [notFound, setNotFound] = useState<boolean>(false);
   const [skills, setSkills] = useState<string>('Not found');
   const [geslacht, setGeslacht] = useState<string>('Undfined');
   const [err, setErr] = useState<string>('');


   useEffect(() => {  
       //Load initial data  
       setLoading(true); 
       if(selectedPokemon){
        setPokemon(pokemonList.find(pok=>pok.id === selectedPokemon.id)); 
       } else{
           let randomNummer = getRandomNumber();
           setPokemon(pokemonList.find(pok=>pok.id === randomNummer));
           setLoading(false);
       }
       setLoading(false);
       console.log((pokemon));
}, []);

useEffect(() => {
    getAdditionalInfo();
},[]);


const getAdditionalInfo = async () => {
    try {
        //Geslacht =
        setLoading(true);
        const geslacht = await getPokemonDetail(`gender/${id}`);
        geslacht ? setGeslacht(geslacht.name) : setErr('Unable to get geneder type');
        
        //Get description from species =
        const dataSpecies = await getPokemonDetail(`pokemon-species/${id}`);
        if (dataSpecies) {
            dataSpecies.flavor_text_entries.some((flavor: any) => {
                if (flavor.language.name === 'en') {
                    setAbout(flavor.flavor_text);
                }
            });
        } else {
            setErr('unable to get description');
            setLoading(false);
        }
        setLoading(false);
        console.log(pokemon);
    } catch (err) {
        setErr('Something went wrong when getting additionaInfo');
    }
};

  return (
    <div className="flex-1 realtive">
        { pokemon ? 
          <PokemonDetailPage id={pokemon.id} loading={loading} pokemon={pokemon} skills={skills} geslacht={geslacht} about={about} />
        :null}
            
</div> 
  )
}
export default Home