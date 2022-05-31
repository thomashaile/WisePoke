import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonDetailInfo, Type } from '../types/types';
import { usePokdex } from './Context/Pokedex';
import { getPokemonDetail } from '../api/api';
import { formattedSkills } from '../pages/helpers/common';
import PokemonDetailPage from './PokemonDetailPage';

//import ErrorPage from '../pages/ErrorPage';

const PokemonDetail = (): JSX.Element => {
    const { pokemonIndex } = useParams();

    const { selectedPokemon } = usePokdex();

    const [pokemon, setPokemon] = useState<PokemonDetailInfo | any>(null);
    const [id, setId] = useState<any>(pokemonIndex);
    const [about, setAbout] = useState<any>('No Information');
    const [loading, setLoading] = useState<boolean>(false);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [skills, setSkills] = useState<string>('Not found');
    const [geslacht, setGeslacht] = useState<string>('Undfined');
    const [err, setErr] = useState<string>('');

    useEffect(() => {
        async function fetchData() {
            try {
                 setLoading(true);
                 if (selectedPokemon) {
                    setPokemon(selectedPokemon);
                    setLoading(false);
                }else{
                    const response = await loadNewData();
                    if(!response) setErr('Unable to get new data');
                    setPokemon(response);
                    setLoading(false);
                }
                //Vaardigheden =
               setSkills(formattedSkills(pokemon.abilities));
             
             }catch (err) {
                setErr('Something went wrong when getting Pokemon info');
            }
            setLoading(false);
        }

        // ...
        fetchData();
      
    }, [id]);

    useEffect(() => {
            getAdditionalInfo();
    },[id]);
 

    const getAdditionalInfo = async () => {
        try {
            //Geslacht =
            setLoading(true);
            const geslacht = await getPokemonDetail(`gender/${id}`);
            geslacht ? setGeslacht(geslacht.name) : setErr('Unable to get geneder type');

            //Get description from species =
            const dataSpecies = await getPokemonDetail(`pokemon-species/${id}`);
            if (dataSpecies) {
                dataSpecies.flavor_text_entries.some((flavor: any) => {
                    if (flavor.language.name === 'en') {
                        setAbout(flavor.flavor_text);
                    }
                });
            } else {
                setErr('unable to get description');
                setLoading(false);
            }
            setLoading(false);
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


    return (
        <div>
            {pokemon ?
                 <PokemonDetailPage id={pokemon.id} loading={loading} pokemon={pokemon} skills={skills} geslacht={geslacht} about={about} />
           : null}          
            </div>
    );
};

export default PokemonDetail;
