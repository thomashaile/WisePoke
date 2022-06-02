import React from 'react'
import { getBackgroundColorFromType } from '../../pages/helpers/common';
import { Pokemon, PokemonDetailInfo, Type } from '../../types/types';

 interface PokemonInfoProps {
  about: string;
  geslacht: string;
  skills: string;
  pokemon:any;
  id:any;
  }
  
  const PokemonInfo = ({ about, id, geslacht, skills, pokemon }: PokemonInfoProps) => {
  
  console.log(skills)
    return (
    <div className="flex flex-col items-left m-3"> 
      <p className="ml-3 text-white font-semibold text-lg uppercase">Info</p>             
      <div className="flex flex-col items-left my-1">
         <div className="flex rounded-lg flex-col items-center justify-center shadow-lg bg-white mt-1 pb-2">
                            <div className="w-full flex px-2 my-2">
                                <p className="text-md ml-5 pr-2 text-gray-600">{about}</p>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                 <p className="text-md ml-5 text-gray-600">Types</p>
                                <div className="flex m3-2">
                                {pokemon.types.map((type: Type, idx: number) => {
                                return (
                                    <div
                                        key={idx}
                                        className="flex-no-shrink px-5 ml-2 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider capitalize border-1 border-red-500 text-white rounded-full"
                                        style={{ backgroundColor: `#${getBackgroundColorFromType(type.type.name)}` }}
                                    >
                                        {type.type.name}
                                    </div>
                                );
                            })}</div>  
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">Nummer</p>
                                <div className="text-lg">{pokemon.id}</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">Hoogte</p>
                                <div className="text-lg">{pokemon.height}m</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">gewicht</p>
                                <div className="text-lg">{pokemon.weight} Kg</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">geslacht</p>
                                <div className="text-lg">{geslacht}</div>
                            </div>
                            <div className="flex w-full pt-1 gap-3 capitalize">
                                <p className="text-md ml-5 text-gray-600">vaardigheden</p>                                
                                <div className="text-lg">
                                    <h1>{skills}</h1>
                                </div>
                            </div>
                        </div>
                    </div>            
         
      
     </div>
  )
}

export default PokemonInfo;