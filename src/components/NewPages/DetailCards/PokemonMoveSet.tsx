import React, { useEffect, useState } from 'react'
import { getFormattedMoveSets } from '../helpers/common';

interface MovesCardProps{
  movelist: any;
}

const PokemonMoveSet = ({ movelist }: MovesCardProps) => {
  const [moves, setMoves] = useState<any>([]);

  useEffect(() => {
      //get 4 randomly generated moves
      setMoves(getFormattedMoveSets(movelist));  
  },[]);

  return (
    <div className="flex flex-col items-left m-3"> 
    <p className="ml-3 text-white font-semibold text-lg uppercase">MoveSet</p>             

    <div className="grid grid-cols-2 gap-x-px rounded-lg items-center justify-center shadow-lg bg-white m-1 p-1">
    {moves.length > 0 ? moves.map((move: any, index:any) => {
      return (
        <div className="flex justify-between">
          <div key={index} className="flex flex-no-shrink flex-wrap px-4 ml-2 py-2 text-sm font-medium tracking-2 capitalize rounded-full">    
              <a className="pl-6 pr-4 border-2 text-md rounded-3xl hover:text-gray-100 focus:border-4" style={{ border: `1px solid ${move.color}`, color: `${move.color}` }}>
                  Level {move.level}
              </a>
              <p className="mt-2 pl-2 text-sm">{move.name}</p>
          </div>
      </div>
        
      )}) : null}
    </div>
   </div>
  )
}

export default PokemonMoveSet