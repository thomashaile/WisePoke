import { useEffect, useState } from 'react';
import { getFormattedMoveSets } from '../../pages/helpers/common';

interface MoveSetProps {
    pokemonmoves: any[];
}

const MoveSet = ({ pokemonmoves }: MoveSetProps) => {
      const [moves, setMoves] = useState<any>([]);

      useEffect(() => {
          //get 4 randomly generated moves
          setMoves(getFormattedMoveSets(pokemonmoves)); 
          console.log(setMoves); 
      },[]);

    return (
        <div className="grid grid-cols-2 gap-x-px md:grid-cols-4 rounded-lg items-center justify-center shadow-lg bg-white m-1 p-1">

    {moves.length > 0 ? moves.map((move: any, index:any) => {
        return (
            <div key={index} className="flex resize-none ml-1 p-2 pb-10 mt-2 mb-3 flex-row justify-evenly capitalize">
                <a className="p-1 pl-5 pr-4 border-2 text-md rounded-lg hover:text-gray-100 focus:border-4" style={{ border: `1px solid ${move.color}`, color: `${move.color}` }}>
                    Level {move.level}
                </a>
                <p className="mt-2 text-lg">{move.name}</p>
            </div>
        )}) : null}
        </div>
    );
};
export default MoveSet;
