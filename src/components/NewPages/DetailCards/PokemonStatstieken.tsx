import React from 'react';
import ProgressBar from './ProgressBar';
interface CardProps {
    baseStats: any;
}

const PokemonStatstieken = ({ baseStats }: CardProps) => {
    return (
        <div className="flex flex-col items-left">
            <p className="ml-3 text-white font-semibold text-lg uppercase">statistieken</p>
            <div className="rounded-lg justify-between shadow-lg bg-white mt-1">
                <div className="flex flex-col my-1">
                    {baseStats.length
                        ? baseStats.map((stat: any, index: any) => {
                              return (
                                  <div key={index}>
                                      <ProgressBar progressPercentage={stat.base_stat} label={stat.stat.name} />
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
        </div>
    );
};

export default PokemonStatstieken;
