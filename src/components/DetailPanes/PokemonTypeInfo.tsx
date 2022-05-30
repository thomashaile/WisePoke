import React from 'react';
import { getBackgroundColorFromType } from '../../pages/helpers/common';
import { Type } from '../../types/types';
interface Props {
    types: Type[];
}
function PokemonTypeInfo({ types }: Props) {
    return (
        <div>
            {types.map((tt: Type, key: number) => {
                return (
                    <div
                        key={key}
                        className="relative flex-no-shrink px-5 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                        style={{ backgroundColor: `#${getBackgroundColorFromType}` }}
                    >
                        {tt.type.name}
                    </div>
                );
            })}
        </div>
    );
}

export default PokemonTypeInfo;
