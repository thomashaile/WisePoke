import React, { useEffect, useState } from 'react'
import { getFormattedMoveSets } from '../../pages/helpers/common';

type Props = {
  movelist: any;
}

const PokemonMoveSet = ({ movelist }: Props) => {
  const [moves, setMoves] = useState<any>([]);

  useEffect(() => {
      //get 4 randomly generated moves
      setMoves(getFormattedMoveSets(movelist));  
  },[]);

  return (
    <div className="flex flex-col items-left m-3"> 
    <p className="ml-3 text-white font-semibold text-lg uppercase">MoveSet</p>             

    <div className="grid grid-cols-2 gap-x-px md:grid-cols-4 rounded-lg items-center justify-center shadow-lg bg-white m-1 p-1">

    {moves.length > 0 ? moves.map((move: any, index:any) => {
      return (
        <div className="grid grid-cols-2 gap-4 content-evenly capitalize">
      
          <div key={index} className="relativew-48 flex ml-1 p-2 pb-6 m-2 flex-row flex-wrap capitalize">    
              <a className="pl-6 pr-4 border-2 text-md rounded-3xl hover:text-gray-100 focus:border-4" style={{ border: `1px solid ${move.color}`, color: `${move.color}` }}>
                  Level {move.level}
              </a>
              <p className="relative mt-2 text-sm">{move.name}</p>
          </div>
      </div>
        
      )}) : null}
    </div>
   </div>
  )
}

export default PokemonMoveSet