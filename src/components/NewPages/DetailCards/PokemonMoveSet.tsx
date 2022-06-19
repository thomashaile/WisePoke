import React, { useEffect, useState } from 'react';
import { getFormattedMoveSets } from '../helpers/common';

interface MovesCardProps {
    movelist: any;
}

const PokemonMoveSet = ({ movelist }: MovesCardProps) => {
    const [moves, setMoves] = useState<any>([]);

    useEffect(() => {
        //get 4 randomly generated moves
        setMoves(getFormattedMoveSets(movelist));
    }, []);

    return (
        <div className="flex flex-col items-left mt-2">
            <p className="ml-3 text-white font-semibold text-lg uppercase">MoveSet</p>
            <div className="grid grid-cols-2 rounded-lg shadow-lg bg-white space-x-2 px-3">
                {moves.length > 0
                    ? moves.map((move: any, index: any) => {
                          return (
                              <div className="flex m-2 flex-wrap">
                                  <div key={index} className="flex capitalize justify-between">
                                      <a
                                          className={`shrink-0 border-2 py-1 px-3 font-semibold text-sm rounded-full border-2 text-${move.color}`}
                                          style={{ border: `1px solid ${move.color}`, color: `${move.color}` }}
                                      >
                                          Level {move.level}
                                      </a>
                                      <p className="mt-2 pl-2 font-bold text-sm">{move.name}</p>
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default PokemonMoveSet;
