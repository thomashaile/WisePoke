import { count } from 'console';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokdex } from '../Context/Pokedex';
interface BoxProps {
    navLink?: string;
    text?: string;
    style?: any;
    count?: number;
}
const DashboardBox = ({ navLink, text, count, style }: BoxProps): JSX.Element => {
    let navigate = useNavigate();
    const { setDefaultPage } = usePokdex();

    const handleClick = () => {
        navigate(`${navLink}`);
        setDefaultPage(false);
    };

    return (
        <div className={`flex flex-col cursor-pointer rounded-lg pl-3 pt-10 pb-3 bg-gradient-to-r from-[${style.from}] to-[${style.to}]`} onClick={handleClick}>
            <p className="font-bold text-xl text-white">{text}</p>
            <p className="text-gray-300 text-lg">{count ? (count > 1 ? `${count} Pokemons` : `${count} Pokemon`) : 'No saved pokemons'}</p>
        </div>
    );
};

export default DashboardBox;
