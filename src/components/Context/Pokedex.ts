import * as React from 'react';
import { PokemonDetailInfo } from '../../types/types';

//Pokedex context interface
export interface PokemonContextProps {
    favorites: PokemonDetailInfo[];
    teamList: PokemonDetailInfo[];
    pokemonList: PokemonDetailInfo[] | any[];
    isDefaultPage: boolean; 
    setFavorites: (favorites: any) => void;
    setPokemonList: (pokemonList: PokemonDetailInfo[]) => void;
    setTeamList: (teamList: any) => void;
    setDefaultPage: (page: boolean) => void;
}

//Default inital values
export const defaultContext: PokemonContextProps = {
    favorites: [],
    teamList: [],
    pokemonList: [],
    isDefaultPage: true,
    setDefaultPage: () =>{},
    setPokemonList: () =>{},
    setFavorites: () => {},
    setTeamList: () => {},
};

export const PokemonContext = React.createContext<PokemonContextProps>(defaultContext);

//Custom hook - for consumers
export const usePokdex = () => React.useContext(PokemonContext);
