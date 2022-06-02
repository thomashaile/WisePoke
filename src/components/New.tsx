import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllPokemonsData } from '../api/api';
import { Pokemon } from '../types/types';
import Dashboard from './Dashboard'
import Main from './Main'
import PokemonDetail from './PokemonDetail';
import Search from './Search'

interface ContentProps{
    pokemon?: any;
    loading?:boolean;
    pokemonList?:any | Pokemon[],
    geslacht?: string;
    about?: string;
    skills?: string;
    id?: string | number;
    detailpage?: string | null;
    onSearch?: (search: string | number) => void;
}

function New({ id, about, geslacht, loading, pokemon, skills, detailpage }:ContentProps) {
   const [pokemons, setPokemons] = useState<any[]>([]);
    const [filteredPokeList, setFilteredPokeList] = useState<Pokemon[]>([]);
    //const [loading, setLoading] = useState<boolean>(true);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [searching, setSearching] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [pokemonSeleted, setPokemonSelected] = useState(null);
   // 
   const [page, setPage] = useState<boolean>(false);
   const location = useLocation ();
   const navigate = useNavigate(); 
   useEffect(() => {
        if (!pokemons.length) {
            fetchPokemons();
        }
        if(detailpage){
            setPage(true);
        } 
   }, []);


    const fetchPokemons = async () => {
        try {
            const data = await getAllPokemonsData();
            setPokemons(data);
           // setLoading(false);
            setNotFound(false);
        } catch (err) {
            setError('Error fetching Pokemons');
            return;
        }
    };

   
    const onSearch = (value: any) => {
        try {
            if (!value) {
                setSearching(false);
            }
            //setLoading(true);
            setNotFound(false);
            setSearching(true);
            let filterResult = pokemons.filter((poke) => {
                return poke.name.toLowerCase().includes(value.toLowerCase()) || poke.id == value;
            });
            if (!filterResult) {
                setNotFound(true);
             //   setLoading(false);
            } else {
                setFilteredPokeList(filterResult);
            }
           // setLoading(false);
            setSearching(false);
        } catch (err) {
            setError('Error Searching..');
        }
    };


    

  return (  <div className="flex min-h-screen bg-gray-200 font-sans">
  <div className="flex flex-row flex-wrap flex-1 flex-grow content-start pl-6">
        {/*** left mobile */}
        <div className="bg-gray-100 border border-gray-200 py-6 lg:py-0 w-full lg:max-w-md flex flex-wrap content-start">
            <div className="min-h-screen lg:w-full">
                <header className="p-4">
                    <h1 className="text-5xl font-bold">Pokémon</h1>
                </header>
                <div className="mx-2">
                    <Search onSearch={onSearch} />
                    <Dashboard favoriteCount={3} mijnTeamListCount={2} />
                </div>
                <div className="mx-2">
                    <Main pokemonList={filteredPokeList.length ? filteredPokeList : pokemons} loading={false} />
                </div>
            </div>
        </div>
        <div className="w-full bg-green-500 flex-1">
            <div className="flex flex-wrap">
         {/*      <RandomPokemon id={pokemon.id} loading={loading} pokemon={pokemon} skills={skills} geslacht={geslacht} about={about} />
           */}  </div>
        </div>     
    </div>
    </div>
  )
}

export default New