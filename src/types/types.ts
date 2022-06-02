export interface SearchInput {
    searchInput: string | number;
}
export interface Pokemon {
    id: number;
    name: string;
    sprites: Image;
    types: Type[];
}

/* Pokemon detail interface */
export interface PokemonDetailInfo {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    height: number;
    id: number | string;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprite;
    stats: PokemonStat[];
    types: Type[];
    weight: number;
}
export interface Image {
    front_default: string;
}
export interface Type {
    slot: number;
    type: {
        name: string;
    };
}
interface Ability {
    ability: number;
    is_hidden: boolean;
    slot: number;
}
interface Form {
    name: string;
    url: string;
}

interface Move {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: {
        name: string;
        url: string;
    };
    version_group: {
        name: string;
        url: string;
    };
}

interface Species {
    name: string;
    url: string;
}
interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
    };
}
interface OtherSprite {
    dream_world: {
        front_default: string | null;
        front_female: string | null;
    };
    home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    'official-artwork': {
        front_default: string | null;
    };
}

interface Sprite {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: OtherSprite;
}
