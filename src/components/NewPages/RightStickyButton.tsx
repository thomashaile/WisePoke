import React, { useState } from 'react';
import { usePokdex } from '../Context/Pokedex';

interface Props {
    isInMijnList?: boolean;
    handleMijnTeamLijst: () => void;
}

function RightStickyButton({ isInMijnList, handleMijnTeamLijst }: Props) {
    const { isDefaultPage } = usePokdex();
    return (
        <div className="">
            <button
                type="button"
                //md:block md:w-auto
                className={`w-full ${isDefaultPage ? 'hidden' : 'block'} ${isInMijnList ? 'bg-red-600' : 'bg-gray-800'} 
                md:w-auto text-lg text-white text-center
                font-medium rounded-lg
                fixed capitalize right-0
                bottom-1
                p-4`}
                onClick={handleMijnTeamLijst}
            >
                {isInMijnList ? 'verwijderen uit teamlijst' : 'toevoegen aan mijn team'}
            </button>
        </div>
    );
}

export default RightStickyButton;
