import React from 'react';
import { styleFavorieten, styleMijnTeam } from '../pages/helpers/styleHelper';
import DashboardBox from './DashboardBox';

interface DashboardProps {
    favoriteCount?: number;
    mijnTeamListCount?: number;
}

function Dashboard({ favoriteCount, mijnTeamListCount }: DashboardProps) {
    return (
        <div className="grid grid-cols-2 gap-1">
            <DashboardBox text={'Mijn Team'} count={mijnTeamListCount} navLink={'/mijnTeam'} style={styleMijnTeam.divStyle} />
            <DashboardBox text={'Favorieten'} count={favoriteCount} navLink={'/favorieten'} style={styleFavorieten.divStyle} />
        </div>
    );
}

export default Dashboard;
