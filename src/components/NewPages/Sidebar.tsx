import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getAllPokemonsData } from '../../api/api';
import Loading from './Loading';
import { PokemonDetailInfo } from '../../types/types';
import { usePokdex } from '../Context/Pokedex';
import Dashboard from './Dashboard';
import MainContent from './MainContent';
import Search from './Search';
import SortBar from './SortBar';

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
                if (!pokemons.length) {
                    const data = await getAllPokemonsData();
                    setPokemons(data);
                    setPokemonList(data);
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
    }, []);

    const onSearch = (value: any) => {
        try {
            if (!value) {
                setSearching(false);
            }
            setLoading(true);
            setSearching(true);
            let filterResult = pokemons.filter((poke) => {
                return poke.name.toLowerCase().includes(value.toLowerCase()) || poke.types.some((type) => type.type.name.toLowerCase().includes(value.toLowerCase())) || poke.id == value;
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
        <div id="sidebar" className={`w-full ${isDefaultPage ? 'flex' : 'hidden'} md:flex md:max-w-sm flex-col static h-screen overflow-auto overflow-x-hidden shrink-0 bg-gray-100 p-4`}>
            <header className="p-4">
                <h1 className="text-5xl font-bold leading-10 tracking-[0.374px]">Pokémon</h1>
            </header>
            <Search onSearch={onSearch} />
            <Dashboard />
            {loading ? <Loading /> : <MainContent pokemonList={filteredPokeList.length ? filteredPokeList : pokemons} loading={false} />}
            <SortBar />
        </div>
    );
}

export default Sidebar;
