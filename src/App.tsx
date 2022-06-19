import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonContext } from './components/Context/Pokedex';
import MyTeam from './components/NewPages/MijnTeam';
import Favorites from './components/NewPages/Favorites';
import ErrorPage from './components/NewPages/ErrorPage';
import './styles.css';
import { Pokemon, PokemonDetailInfo } from './types/types';
import DetailPage from './components/NewPages/DetailPage';
import HomePage from './components/NewPages/HomePage';
import Sidebar from './components/NewPages/Sidebar';

export enum Store {
    myFavorites = 'My favorites',
    myTeamList = 'My team pokemon list'
}

function App() {
    const [favorites, setFavorites] = useState<PokemonDetailInfo[]>([]);
    const [teamList, setTeamList] = useState<PokemonDetailInfo[]>([]);
    const [pokemonList, setPokemonList] = useState<PokemonDetailInfo[] | any>([]);
    const [isDefaultPage, setIsDefaultPage] = useState<boolean>(true);

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
    const updatePokemonList = (pokemon: PokemonDetailInfo[]) => {
        setPokemonList(pokemon);
    };
    const changePage = (page: boolean) => {
        setIsDefaultPage(page);
    };

    return (
        <PokemonContext.Provider
            value={{
                favorites,
                teamList,
                isDefaultPage,
                pokemonList,
                setDefaultPage: changePage,
                setFavorites: updateFavoritePokemons,
                setPokemonList: updatePokemonList,
                setTeamList: updateTeamPokemons
            }}
        >
            <Router>
                <div className="flex h-screen w-screen overflow-hidden font-['SF Pro Display'] bg-gray-100">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/favorieten" element={<Favorites />} />
                        <Route path="/mijnTeam" element={<MyTeam />} />
                        <Route path="/favorieten/pokemon/:pokemonIndex" element={<DetailPage />} />
                        <Route path="/mijnTeam/pokemon/:pokemonIndex" element={<DetailPage />} />
                        <Route path="/pokemon/:pokemonIndex" element={<DetailPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
            </Router>
        </PokemonContext.Provider>
    );
}

export default App;
