import React from 'react';
import { usePokdex } from '../Context/Pokedex';
import DashboardBox from './DashboardBox';
import { styleFavorieten, styleMijnTeam } from './helpers/styleHelper';

function Dashboard() {
    const { teamList, favorites } = usePokdex();
    return (
        <div className="h-40 flex mt-5 justify-between gap-4">
            <DashboardBox text={'Mijn Team'} count={teamList.length} navLink={'/mijnTeam'} style={styleMijnTeam.divStyle} />
            <DashboardBox text={'Favorieten'} count={favorites.length} navLink={'/favorieten'} style={styleFavorieten.divStyle} />
        </div> 
    );
}

export default Dashboard;
