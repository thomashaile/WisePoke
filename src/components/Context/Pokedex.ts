import * as React from 'react';
import { getRandomNumber } from '../../pages/helpers/common';
import { Pokemon } from '../../types/types';

//Pokedex context interface
export interface PokemonContextProps {
    pokemonList: any[];
    favorites: Pokemon[];
    teamList: Pokemon[];
    themeColor: string;
    isDefaultPage: boolean;
    selectedPokemon: any;
    setPokemonList: (pokemon: any) => void;
    setFavorites: (favorites: any) => void;
    setTeamList: (teamList: any) => void;
    setDefaultPage: (page: boolean) => void;
    setThemeColor: (themeColor: string) => void;
    setSelectedPokemon: (selectedPokemon: any) => void;
}

//Default inital values
export const defaultContext: PokemonContextProps = {
    favorites: [],
    teamList: [],
    themeColor: '',
    pokemonList: [],
    isDefaultPage: true,
    setDefaultPage: () =>{},
    setFavorites: () => {},
    setTeamList: () => {},
    setThemeColor: () => {},
    setPokemonList: () => {},
    selectedPokemon: {
        id: 95,
        name: '',
        sprites: {
            front_default: ''
        },
        types: []
    },
    setSelectedPokemon: () => {}
};

export const PokemonContext = React.createContext<PokemonContextProps>(defaultContext);

//Custom hook - for consumers
export const usePokdex = () => React.useContext(PokemonContext);
