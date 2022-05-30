import React from 'react';
import { Link } from 'react-router-dom';
import DashboardBox from './DashboardBox';
interface DashboardProps {
    favoriteCount?: number;
}
const styleMijnTeam = {
    divStyle: `w-full pb-3 pt-14 pl-3 mt-2 md:pl-8 mb-2 rounded-lg bg-gradient-to-r from-[#46469C] to-[#7E32E0]`
};
const styleFavorieten = {
    divStyle: `w-full pb-3 pt-14 pl-3 mt-2 md:pl-8 mb-3 rounded-lg bg-gradient-to-r from-[#65CB9A] to-[#15D0DC]`
};
function Dashboard({ favoriteCount }: DashboardProps) {
    return (
        <div className="grid grid-cols-2 gap-1">
            <DashboardBox text={'Mijn Team'} navLink={'/mijnTeam'} style={styleMijnTeam.divStyle} />
            <Link to={`/favorieten`}>
                <div className="w-full pb-3 pt-14 pl-3 mt-2 md:pl-8 mb-3 rounded-lg bg-gradient-to-r from-[#65CB9A] to-[#15D0DC]">
                    <p className="font-bold text-3xl text-white text-base tracking-tight md:text-4xl">Favorieten </p>
                    <p className="pokemon-count text-xl mb-3 md:text-2xl">{favoriteCount ? (favoriteCount > 1 ? `${favoriteCount} Pokemons` : `${favoriteCount} Pokemon`) : 'No savedd pokemons'}</p>
                </div>
            </Link>
        </div>
    );
}

export default Dashboard;
