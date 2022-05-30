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
            <p className="font-bold text-2xl text-white text-base tracking-tight md:text-4xl">{text}</p>
            <p className="pokemon-count text-xl mb-3 md:text-2xl">{count ? (count > 1 ? `${count} Pokemons` : `${count} Pokemon`) : 'No saved pokemons'}</p>
        </div>
    );
};

export default DashboardBox;
