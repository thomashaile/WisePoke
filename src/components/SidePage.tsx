import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllPokemonsData } from '../api/api';
import { getBackgroundColorFromType, getRandomNumber } from '../pages/helpers/common';
import Loading from '../pages/Loading';
import { Pokemon } from '../types/types';
import { usePokdex } from './Context/Pokedex';
import Dashboard from './Dashboard';
import Main from './Main';
import Search from './Search';

interface Props {
    favoriteCount: number;
    mijnTeamListCount: number;
}
const SidePage = ({ favoriteCount, mijnTeamListCount }: Props): JSX.Element => {

    const { pokemonList, selectedPokemon, setThemeColor, setSelectedPokemon, setPokemonList, isDefaultPage } = usePokdex();
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [filteredPokeList, setFilteredPokeList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searching, setSearching] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const defaultPokemon = ()=>{
            setLoading(true);
            if(!selectedPokemon){
                const randomNumber = getRandomNumber();  //get random generated number
                const color = getBackgroundColorFromType(pokemons[randomNumber]?.types[pokemons[randomNumber].types.length - 1].type.name);
                setSelectedPokemon(randomNumber);
                setThemeColor(color);
                setLoading(false);
            }
            setLoading(false);
        }
        //Pick initial random pokemon  
        return defaultPokemon();
    }, []);

    
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                if(!pokemonList.length) {
                    const data = await getAllPokemonsData();
                    setPokemons(data);
                    setPokemonList(data);
                    setLoading(false);
                    return;
                }else{
                    console.log("loading from saved context");
                    setPokemons(pokemonList);
                    setLoading(false);           
                }
            
            } catch (err) {
                setError('Error fetching Pokemons');
            }
        };
        fetchPokemons();
    },[]);

    const onSearch = (value: any) => {
        try {
            if (!value) {
                setSearching(false);
            }
            setLoading(true);
            setSearching(true);
            let filterResult = pokemons.filter((poke) => {
                return poke.name.toLowerCase().includes(value.toLowerCase()) || poke.id == value;
            });
            if (!filterResult) {
                setLoading(false);
            } else {
                setFilteredPokeList(filterResult);
            }
            setLoading(false);
            setSearching(false);
        } catch (err) {
            setError('Error Searching..');
        }
    };

  return (
        <div className={`bg-gray-100 border border-gray-200 py-6 lg:py-0 w-full lg:max-w-md flex flex-wrap content-start ${isDefaultPage ? 'block' : 'hidden lg:block' }`}>
            <div className="min-h-screen lg:w-full">
                <header className="p-4">
                    <h1 className="text-5xl font-bold">Pokémon</h1>
                </header>
                <div className="mx-2">
                    <Search onSearch={onSearch} />
                    <Dashboard favoriteCount={favoriteCount} mijnTeamListCount={mijnTeamListCount} />
                </div>
                <div className="mx-2">
                    {loading ? <Loading /> : 
                    <Main pokemonList={filteredPokeList.length ? filteredPokeList : pokemons} loading={false} />
                    }
                    </div>
            </div>
        </div>    
  )
}

export default SidePage;