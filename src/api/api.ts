import { getPokemon } from './ApiService';
import { PokemonDetailInfo } from '../types/types';

/** Endponits */
const baseUrl = 'https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon';
const baseUrl2 = 'https://pokeapi.co/api/v2';

export const loadAllPokemons = async () => {
    try {
        let response = await getPokemon(baseUrl);
        return response;
    } catch (err) {
        throw err;
    }
};

export const getPokemonDetail = async (pokemon: string) => {
    try {
        let url = `${baseUrl2}/${pokemon}`;
        let response = await getPokemon(url);
        return response;
    } catch (err) {
        throw err;
    }
};

export const getAllPokemonsData = async () => {
    try {
        let pokemons = await loadAllPokemons();
        let pokemonPromises = pokemons.map((pokemon: any) => getPokemonDetail(`pokemon/${pokemon.id}`));
        return await Promise.all(pokemonPromises);
    } catch (err) {
        throw err;
    }
};
