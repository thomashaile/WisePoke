import { count } from 'console';
import React from 'react';
import { useNavigate } from 'react-router-dom';
interface BoxProps {
    navLink?: string;
    text?: string;
    style?: string;
    count?: number;
}
const DashboardBox = ({ navLink, text, count, style }: BoxProps): JSX.Element => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`${navLink}`);
    };

    return (
        <div className={style} onClick={handleClick}>
            <p className="font-bold text-[1.25rem] text-white leading-8">{text}</p>
            <p className="text-gray-300 text-xl mb-3 font-light leading-6">{count ? (count > 1 ? `${count} Pokemons` : `${count} Pokemon`) : 'No saved pokemons'}</p>
        </div>
    );
};

export default DashboardBox;
