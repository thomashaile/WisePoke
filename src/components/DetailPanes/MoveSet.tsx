import { useEffect, useState } from 'react';
import { getFormattedMoveSets } from '../../pages/helpers/common';

interface MoveSetProps {
    move: any[];
}
const MoveSet = ({ move }: MoveSetProps) => {
    const [moves, setMoves] = useState<any[]>([]);

    const colors = ['#4B0082', '#00FF00', '#00FF01', '#FFFF00'];

    useEffect(() => {
        //const formatted = getFormattedMoveSets(move);
        if (move) {
            // setMoves(formatted);
            // console.log(move);
        } else {
            //   console.log('no moves error');
        }
    }, []);

    return (
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 rounded-lg items-center justify-center shadow-lg bg-white m-1 p-1">
            {moves.map((m: any, index) => {
                return (
                    <div className="flex ml-1 p-2 mt-2 flex-row justify-evenly capitalize" key={index + 1}>
                        <a className="p-1 pl-5 pr-4 bg-transparent border-2 text-lg rounded-full hover:text-gray-100 focus:border-4" style={{ border: `1px solid ${m.color}`, color: `${m.color}` }}>
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
