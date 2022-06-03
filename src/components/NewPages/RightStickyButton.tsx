import React, { useState } from 'react';
interface Props {
  isInMijnList?: boolean;
  handleMijnTeamLijst: () => void;
}

function RightStickyButton({ isInMijnList, handleMijnTeamLijst }:Props) {

  const [buttonOpen, setButtonOpen] = useState(true);

  return (
    <>
    { buttonOpen && (
      <div className="">
            <button  type="button"
                    className={`${isInMijnList ? 'bg-red-600' : 'bg-gray-800'}
             text-lg text-white text-center
             font-medium rounded-lg
             fixed capitalize right-0
             bottom-1
             p-4`} onClick={handleMijnTeamLijst}
                >{isInMijnList ? "verwijderen uit teamlijst" : "toevoegen aan mijn team"}
              </button>
        </div>
    )}
    </>
  );
}

export default RightStickyButton;