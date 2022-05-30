import React from 'react';
import ProgressBar from './ProgressBar';
interface StatsProps {
    baseStats: any;
}
const Stats = ({ baseStats }: StatsProps) => {
    return (
        <div className="rounded-lg justify-between shadow-lg bg-white mt-1">
            <div className="w-full flex flex-col my-3">
                {baseStats.map((stat: any, index: any) => {
                    return (
                        <div key={index}>
                            <ProgressBar progressPercentage={stat.base_stat} label={stat.stat.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stats;
