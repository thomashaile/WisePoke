import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Dashboard from './Dashboard';
import Main from './Main';
import { getAllPokemonsData, getPokemonDetail } from '../api/api';
import { Pokemon } from '../types/types';

interface HomeProps {
    favoriteCount: number;
    mijnTeamListCount: number;
}
const Home = ({ favoriteCount, mijnTeamListCount }: HomeProps): JSX.Element => {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [filteredPokeList, setFilteredPokeList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [searching, setSearching] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [pokemonSeleted, setPokemonSelected] = useState(null);

    useEffect(() => {
        if (!pokemons.length) {
            fetchPokemons();
        }
    }, []);

    const fetchPokemons = async () => {
        try {
            const data = await getAllPokemonsData();
            setPokemons(data);
            setLoading(false);
            setNotFound(false);
        } catch (err) {
            setError('Error fetching Pokemons');
            return;
        }
    };

    const handleSelect = (pokemonId: any) => {
        setPokemonSelected(pokemons.filter((p) => p.id === pokemonId)[0]);
    };

    const onSearch = (value: any) => {
        try {
            if (!value) {
                setSearching(false);
            }
            setLoading(true);
            setNotFound(false);
            setSearching(true);
            let filterResult = pokemons.filter((poke) => {
                return poke.name.toLowerCase().includes(value.toLowerCase()) || poke.id == value;
            });
            if (!filterResult) {
                setNotFound(true);
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
        <div className="bg-gray-100 relative">
            <div className="mx-4 md:mx-6">
                <header className="p-4">
                    <h1 className="text-5xl">Pokemon</h1>
                </header>
                <Search onSearch={onSearch} />
                <Dashboard favoriteCount={favoriteCount} mijnTeamListCount={mijnTeamListCount} setError={setError} />
            </div>
            <div className="min-h-screen flex-1 flex flex-col mx-4 md:mx-6 md:space-y-4">
                {notFound ? (
                    <div className="not-found-text">
                        <span>No search results found... </span>
                    </div>
                ) : (
                    <Main pokemonList={filteredPokeList.length ? filteredPokeList : pokemons} handleSelect={handleSelect} loading={loading} setError={setError} />
                )}
            </div>
        </div>
    );
};

export default Home;
