import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonDetailInfo, Type } from '../types/types';
import { usePokdex } from './Context/Pokedex';
import { getPokemonDetail } from '../api/api';
import { formattedSkills, getBackgroundColorFromType, getFormattedMoveSets, getPokemonImage } from '../pages/helpers/common';
import PokemonDetailPage from './PokemonDetailPage';

import Loading from '../pages/Loading';
import Nav from '../pages/Nav';
import ErrorPage from '../pages/ErrorPage';
import PokemonTypeInfo from './DetailPanes/PokemonTypeInfo';
//import { createCompilerHost } from 'typescript';

const PokemonDetail = (): JSX.Element => {
    const { pokemonIndex } = useParams();

    //let navigate = useNavigate();
    //, setFavorites, setTeamList
    const { favorites, setFavorites, themeColor, selectedPokemon } = usePokdex();

    const [pokemon, setPokemon] = useState<PokemonDetailInfo | any>([]);
    const [id, setId] = useState<string | undefined>(pokemonIndex);
    const [about, setAbout] = useState<any>('No Information');
    const [template, setTemplates] = useState<string>(themeColor);
    const [loading, setLoading] = useState<boolean>(false);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [skills, setSkills] = useState<any>('Not found');
    const [geslacht, setGeslacht] = useState<string>('Undfined');
    const [moveSet, setMoveSet] = useState<any[]>([]);
    const [err, setErr] = useState<string>();

    //Check if it's in my favorites list
    const isInFavorite = favorites.some((e) => e.id === pokemon?.id) ? true : false;

    useEffect(() => {
        async function fetchData() {
            try {
                 if (selectedPokemon) {
                    setPokemon(selectedPokemon);
                    return;
                }else{
                    //We can await here
                    const response = await loadNewData();
                    response ? setPokemon(response) : setErr('Unable to get new data');
                    return;
                }   
             }catch (err) {
                setErr('Something went wrong when gettingPokemonInfo');
            }
        }
        // ...
        fetchData();
    }, []);

    useEffect(() => {
       getAdditionalInfo();
    },[]);


    const getPokemonProfile = async () => {
        try {
            if (selectedPokemon) {
                setPokemon(selectedPokemon);
                return;
            } else {
                let newData = await loadNewData();
                newData ? setPokemon(newData) : setErr('Unable to get data');
                return;
            }
        } catch (err) {
            setErr('Something went wrong when gettingPokemonInfo');
        }
    };

    const getAdditionalInfo = async () => {
        try {
            //Geslacht =
            const geslacht = await getPokemonDetail(`gender/${pokemonIndex}`);
            geslacht ? setGeslacht(geslacht.name) : setErr('Unable to get geneder type');

            //Get description from species =
            const dataSpecies = await getPokemonDetail(`pokemon-species/${pokemonIndex}`);
            if (dataSpecies) {
                dataSpecies.flavor_text_entries.some((flavor: any) => {
                    if (flavor.language.name === 'en') {
                        setAbout(flavor.flavor_text);
                    }
                });
            } else {
                setErr('unable to get description');
            }

            //Vaardigheden =
            formattedSkills(pokemon.abilities) ? setSkills(formattedSkills(pokemon.abilities)) : setErr('unable to get skills');
            //Move set =
            setMoveSet(getFormattedMoveSets(pokemon.moves));
        } catch (err) {
            setErr('Something went wrong when getting additionaInfo');
        }
    };

    //Request new pokemon data
    const loadNewData = async () => {
        try {
            const data = await getPokemonDetail(`pokemon/${id}`);
            return data;
        } catch (err) {
            setErr('Error fetching Pokemon profile');
        }
    };

    const handleFavorite = () => {
        setFavorites(pokemon);
    };

    return (
        <div className="w-full min-h-screen mx-auto" style={{ backgroundColor: `#${template}` }}>
            <PokemonDetailPage id={pokemon.id} pokemon={pokemon} geslacht={geslacht} moveSet={moveSet} type={pokemon.types} skills={skills} about={about} />
        </div>
    );
};

export default PokemonDetail;
