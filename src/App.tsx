import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { PokemonContext } from './components/Context/Pokedex';
import MyTeam from './pages/MijnTeam';
import Favorites from './pages/Favorites';
import ErrorPage from './pages/ErrorPage'; 
import './styles.css';
import { Pokemon, PokemonDetailInfo } from './types/types';
import PokemonDetail from './components/PokemonDetail';
import Home from './components/Home';
import SidePage from './components/SidePage';
import DetailPage from './components/DetailPage';

export enum Store {
    myFavorites = 'My favorites',
    myTeamList = 'My team pokemon list'
}

function App() {
    const [pokemonList, setPokemonList] = useState<any[]>([]);
    const [favorites, setFavorites] = useState<Pokemon[]>([]);
    const [teamList, setTeamList] = useState<Pokemon[]>([]);
    const [themeColor, setThemeColor] = useState<string>('');
    const [isDefaultPage, setIsDefaultPage] = useState<boolean>(true);
    const [selectedPokemon, setSelectedPokemon] = useState<any>([]);

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
    const updatePokemons = (pokemon: any[]) => {
        if (pokemon.length > 0) {
            setPokemonList(pokemon);
        }
    };
    const changePage = (page: boolean)=>{
        setIsDefaultPage(page);
    }

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
                pokemonList,
                isDefaultPage,
                setDefaultPage:changePage,
                setPokemonList:updatePokemons,
                setFavorites: updateFavoritePokemons,
                setTeamList: updateTeamPokemons,
                setThemeColor: changeThemeColor,
                setSelectedPokemon: changeSelectedPokemon
            }}
        >  
            <Router>
                
        <div className="flex min-h-screen bg-gray-200 font-sans">
             <div className="flex flex-cols flex-wrap flex-1 flex-grow content-start pl-2">
                <SidePage favoriteCount={favorites.length} mijnTeamListCount={teamList.length}/>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/mijnTeam" element={<MyTeam />} />
                        <Route path="/favorieten" element={<Favorites />} />
                        <Route path="/favorieten/pokemon/:pokemonIndex" element={<DetailPage />} /> 
                        <Route path="/mijnTeam/pokemon/:pokemonIndex" element={<DetailPage />} />
                        <Route path="/pokemon/:pokemonIndex" element={<DetailPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div> </div>
            </Router>
        </PokemonContext.Provider>
    );
}

export default App;
