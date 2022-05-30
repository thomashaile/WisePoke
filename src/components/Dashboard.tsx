import React from 'react';
import { Link } from 'react-router-dom';
import { styleFavorieten, styleMijnTeam } from '../pages/helpers/styleHelper';
import DashboardBox from './DashboardBox';

interface DashboardProps {
    favoriteCount?: number;
    mijnTeamListCount?: number;
    setError?:(err: string)=>void;
}

function Dashboard({ favoriteCount, mijnTeamListCount, setError }: DashboardProps) {
    return (
        <div className="grid grid-cols-2 gap-1">
            <DashboardBox text={'Mijn Team'} count={mijnTeamListCount} navLink={'/mijnTeam'} style={styleMijnTeam.divStyle} />
            <DashboardBox text={'Favorieten'} count={favoriteCount} navLink={'/favorieten'} style={styleFavorieten.divStyle} />
        </div>
    );
}

export default Dashboard;
