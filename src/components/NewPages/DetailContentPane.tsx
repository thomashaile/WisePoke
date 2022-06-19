import React from 'react';
import { PokemonDetailInfo } from '../../types/types';
import { usePokdex } from '../Context/Pokedex';
import RightStickyButton from './RightStickyButton';
import Nav from './Nav';
import PokemonEvolutie from './DetailCards/PokemonEvolutie';
import PokemonImage from './DetailCards/PokemonImage';
import PokemonInfo from './DetailCards/PokemonInfo';
import PokemonMoveSet from './DetailCards/PokemonMoveSet';
import PokemonStatstieken from './DetailCards/PokemonStatstieken';
import Loading from './Loading';

type Props = {
    pokemon: PokemonDetailInfo;
    pokemonInfo: any;
    loading: boolean;
};

const DetailContentPane = ({ pokemon, pokemonInfo, loading }: Props) => {
    const { favorites, teamList, setFavorites, setTeamList } = usePokdex();

    const isInFavorite = favorites.some((e) => e.id === pokemon?.id) ? true : false;
    const isInMijnList = teamList.some((e) => e.id === pokemon?.id) ? true : false;

    const handleFavorite = () => {
        setFavorites(pokemon);
    };
    const handleMijnTeamLijst = () => {
        setTeamList(pokemon);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex flex-col px-1 py-2 max-w-9xl mx-auto">
                    <Nav handleFavorite={handleFavorite} titel={pokemon?.name} favorite={isInFavorite} />
                    <div className="block min-h-24 pl-8 mb-2">
                        <h1 className="text-3xl text-white font-bold capitalize">{pokemon.name}</h1>
                    </div>
                    <div className="grid grid-cols-2 space-x-3">
                        <div>
                            <PokemonImage id={pokemon.id} />
                            <PokemonInfo pokemon={pokemon} pokemonInfo={pokemonInfo} />
                        </div>
                        <div>
                            <PokemonStatstieken baseStats={pokemon.stats} />
                            <PokemonMoveSet movelist={pokemon.moves} />
                            <PokemonEvolutie />
                        </div>
                    </div>
                    <RightStickyButton isInMijnList={isInMijnList} handleMijnTeamLijst={handleMijnTeamLijst} />
                </div>
            )}
        </>
    );
};

export default DetailContentPane;
