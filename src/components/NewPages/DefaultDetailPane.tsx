import React from 'react'
import { PokemonDetailInfo } from '../../types/types';
import RightStickyButton from './RightStickyButton'

type Props = {
    pokemon: PokemonDetailInfo;
}

const DefaultDetailPane = ({pokemon}: Props) => {
    
  return (
      <>
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <h1>{pokemon.name}</h1>
   
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <h1>left</h1>
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            right 
        </div>
        </div>

        {/* Cards col*/}
        <div className="grid grid-cols-12 gap-6">
        <h1>card1</h1>  
        </div>
        <div className="grid grid-cols-12 gap-6">
        <h1>Card</h1>  
        </div>
    </div>
    </>
  )
}

export default DefaultDetailPane