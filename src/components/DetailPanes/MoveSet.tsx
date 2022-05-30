import { useEffect, useState } from 'react';
import { getFormattedMoveSets } from '../../pages/helpers/common';

interface MoveSetProps {
    move: any[];
}
const MoveSet = ({ move }: MoveSetProps) => {
    const [moves, setMoves] = useState<any[]>([]);
    
    return (
        <div className="grid grid-cols-2 gap-x-px md:grid-cols-4 rounded-lg items-center justify-center shadow-lg bg-white m-1 p-1">
            {move.map((m: any, index) => {
                return (
                    <div className="flex resize-none ml-1 p-2 pb-10 mt-2 mb-3 flex-row justify-evenly capitalize" key={index + 1}>
                        <a className="p-1 pl-5 pr-4 bg-transparent border-2 text-md rounded-lg hover:text-gray-100 focus:border-4" style={{ border: `1px solid ${m.color}`, color: `${m.color}` }}>
                            Level {index}
                        </a>
                        <p className="mt-2 text-lg">{m.level}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default MoveSet;
