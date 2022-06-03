import React, { useState, useEffect, useRef } from 'react';
import { getAllPokemonsData } from '../../api/api';
import Loading from './Loading';
import { PokemonDetailInfo } from '../../types/types';
import { usePokdex } from '../Context/Pokedex';
import Dashboard from './Dashboard';
import MainContent from './MainContent';
import Search from './Search';


function Sidebar() {
  
    const { isDefaultPage, pokemonList, setPokemonList } = usePokdex();
  const [pokemons, setPokemons] = useState<PokemonDetailInfo[]>([]);
  const [filteredPokeList, setFilteredPokeList] = useState<PokemonDetailInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searching, setSearching] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

      
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                if(!pokemons.length) {
                    const data = await getAllPokemonsData ();
                    setPokemons(data);
                    setPokemonList(data);
                    console.log(data);
                    setLoading(false);
                    return;
                }
               setLoading(false);
            } catch (err) {
                setError('Error fetching Pokemons');
            }
            setLoading(false);
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
    <div>
      {/* Sidebar */}
      <div
        id="sidebar"
        className={`w-full max-w-72 flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar md:w-[470px] shrink-0 bg-gray-100 p-4`}
      >
          <header className="p-4">
              <h1 className="text-5xl font-bold">Pokémon</h1>
          </header>
           <Search onSearch={onSearch}/>
           <Dashboard />
           {loading ? <Loading /> : 
            <MainContent pokemonList={filteredPokeList.length ? filteredPokeList : pokemons} loading={false} />
          } 
      </div>
    </div>
  );
}

export default Sidebar;