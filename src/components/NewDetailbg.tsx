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
import { formattedSkills } from '../pages/helpers/common';
import { getPokemonDetail } from '../api/api';

const NewDetailbg = (): JSX.Element => {
  const { pokemonIndex } = useParams();

  const { selectedPokemon, pokemonList, themeColor } = usePokdex();

  const [pokemon, setPokemon] = useState<PokemonDetailInfo | any>(null);
  const [id, setId] = useState<any>(pokemonIndex);
  const [about, setAbout] = useState<any>('No Information');
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [skills, setSkills] = useState<string>('Not found');
  const [geslacht, setGeslacht] = useState<string>('Undfined');
  const [err, setErr] = useState<string>('');

   const Cards = [
    { name: "title", element: <PokemonImage id={selectedPokemon.id}/>},
    { name: "Info", element: "" },
    { name: "Statistieken", element: <PokemonStatstieken baseStats={pokemon.baseStats}/>},
    { name: "MoveSet", element: <PokemonMoveSet movelist={pokemon.moves}/>},
    { name: "evolutie", element: <PokemonEvolutie />},
  ];
  
     useEffect(() => {  
             //Load basic info  
           const basicInfo = () =>{
            setLoading(true);
            let pokemonInfo = pokemonList[selectedPokemon.id];
            if (!pokemonInfo) {
                setErr('Unable to find pokemon with selected id')
                setLoading(false);
            } else {
                setPokemon(pokemonInfo);
            }
            setLoading(false);
           }
         return basicInfo();  
    }, [selectedPokemon.id]); 

  useEffect(() => {
      //Load additionaInfo
     async function fetchAdditionalData() {
        try {
             setLoading(true);

            //Geslacht 
            setLoading(true);
            const geslacht = await getPokemonDetail(`gender/${selectedPokemon.id}`);
           return  geslacht ? setGeslacht(geslacht.name) : setErr('Unable to get geneder type');
           
             //Vaardigheden =
             if(pokemon.length){
              setSkills(formattedSkills(pokemon.abilities));
             }
            
            //Get description from species =
            const dataSpecies = await getPokemonDetail(`pokemon-species/${selectedPokemon.id}`);
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
          }catch (err: any) {
            setErr(err.message);
          }
       }

    // ...
    fetchAdditionalData();
}, [selectedPokemon.id]);


  return (
      <div className="flex-1" style={{ backgroundColor: `#${themeColor}` }}> 
      {pokemon ? <>
         <Nav handleFavorite={()=>{}} id={1} titel={"title"} favorite={true} />
            
           <div className="min-h-32 pl-8 mb-6 lg:w-full">
                <h1 className="text-3xl text-white font-bold capitalize">{pokemon ? pokemon.name : null}</h1>
            </div>   
            <div className="min-w-md w-full h-screen grid grid-rows-2 grid-flow-row grid-cols-2 gap-2 row-starts-2">
            {Cards.length > 0 ? Cards.map((card:any, index:number) => {
                return <div key={index}>{card.element}</div>
            }): null}
        </div></>:null} 
    </div>

   
 
    
    
 
  )
}

export default NewDetailbg