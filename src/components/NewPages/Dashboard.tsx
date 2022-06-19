import React from 'react';
import { usePokdex } from '../Context/Pokedex';
import DashboardBox from './DashboardBox';

function Dashboard() {
    const { teamList, favorites } = usePokdex();
    const bg = {
        box1: {
            from: '#46469C',
            to: '#7E32E0'
        },
        box2: {
            from: '#65CB9A',
            to: '#15D0DC'
        }
    };
    return (
        <div className="my-1 grid grid-cols-2 gap-3">
            <DashboardBox text={'Mijn Team'} count={teamList.length} navLink={'/mijnTeam'} style={bg.box1} />
            <DashboardBox text={'Favorieten'} count={favorites.length} navLink={'/favorieten'} style={bg.box2} />
        </div>
    );
}

export default Dashboard;
