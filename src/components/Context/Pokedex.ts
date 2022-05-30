import * as React from 'react';
import { Pokemon } from '../../types/types';

//Pokedex context interface
export interface PokemonContextProps {
    favorites: Pokemon[];
    teamList: Pokemon[];
    themeColor: string;
    selectedPokemon: any;
    setFavorites: (favorites: any) => void;
    setTeamList: (teamList: any) => void;
    setThemeColor: (themeColor: string) => void;
    setSelectedPokemon: (selectedPokemon: any) => void;
}

//Default inital values
export const defaultContext: PokemonContextProps = {
    favorites: [],
    teamList: [],
    themeColor: '',
    setFavorites: () => {},
    setTeamList: () => {},
    setThemeColor: () => {},
    selectedPokemon: {
        id: null,
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
