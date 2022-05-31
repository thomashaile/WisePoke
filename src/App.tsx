import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonContext } from './components/Context/Pokedex';
import Home from './components/Home';
import MyTeam from './pages/MijnTeam';
import Favorites from './pages/Favorites';
import ErrorPage from './pages/ErrorPage';
import './styles.css';
import { Pokemon } from './types/types';
import PokemonDetail from './components/PokemonDetail';

export enum Store {
    myFavorites = 'My favorites',
    myTeamList = 'My team pokemon list'
}

function App() {
    const [favorites, setFavorites] = useState<Pokemon[]>([]);
    const [teamList, setTeamList] = useState<Pokemon[]>([]);
    const [themeColor, setThemeColor] = useState<string>('');
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | string>();

    useEffect(() => {
        loadMyFavoritePokemons();
        loadMyTeamPokemons();
    }, []);

    const loadMyFavoritePokemons = () => {
        let dataFromStorage = window.localStorage.getItem(Store.myFavorites);
        let savedData = typeof dataFromStorage === 'string' ? JSON.parse(dataFromStorage) : [];
        setFavorites(savedData);
    };

    const loadMyTeamPokemons = () => {
        let dataFromStorage = window.localStorage.getItem(Store.myTeamList);
        let savedData = typeof dataFromStorage === 'string' ? JSON.parse(dataFromStorage) : [];
        setTeamList(savedData);
    };

    const updateFavoritePokemons = (pokemon: Pokemon | any) => {
        const updateList = [...favorites];
        const inFavorite = updateList.findIndex((item) => {
            return item.id === pokemon.id;
        });
        if (inFavorite >= 0) {
            updateList.splice(inFavorite, 1);
        } else {
            updateList.push(pokemon);
        }
        setFavorites(updateList);
        window.localStorage.setItem(Store.myFavorites, JSON.stringify(updateList));
    };

    const updateTeamPokemons = (pokemon: Pokemon | any) => {
        const updateList = [...teamList];
        const inMijnTeamLijst = updateList.findIndex((item) => {
            return item.id === pokemon.id;
        });
        if (inMijnTeamLijst >= 0) {
            updateList.splice(inMijnTeamLijst, 1);
        } else {
            updateList.push(pokemon);
        }
        setTeamList(updateList);
        window.localStorage.setItem(Store.myTeamList, JSON.stringify(updateList));
    };

    const changeSelectedPokemon = (pokemon: any) => {
        setSelectedPokemon(pokemon);
    };

    const changeThemeColor = (color: string) => {
        setThemeColor(color);
    };

    return (
        <PokemonContext.Provider
            value={{
                favorites,
                teamList,
                selectedPokemon,
                themeColor,
                setFavorites: updateFavoritePokemons,
                setTeamList: updateTeamPokemons,
                setThemeColor: changeThemeColor,
                setSelectedPokemon: changeSelectedPokemon
            }}
        >
            <Router>
                <div className="w-full">
                    <Routes>
                        {/* needs rewrite repetitive paths*/}
                        <Route path="/" element={<Home favoriteCount={favorites.length} mijnTeamListCount={teamList.length} />} />
                        <Route path="/mijnTeam" element={<MyTeam />} />
                        <Route path="/favorieten" element={<Favorites />} />
                        <Route path="/favorieten/pokemon/:pokemonIndex" element={<PokemonDetail />} />
                        <Route path="/mijnTeam/pokemon/:pokemonIndex" element={<PokemonDetail />} />
                        <Route path="/pokemon/:pokemonIndex" element={<PokemonDetail />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </Router>
        </PokemonContext.Provider>
    );
}

export default App;
