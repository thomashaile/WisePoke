import React from 'react'
import { getPokemonImage } from '../../pages/helpers/common';
import { usePokdex } from '../Context/Pokedex';
 interface CardProps {
   id?: string| number
/*    bg?: string | undefined,
    height?: string | number,

} */}

const PokemonImage = ({ id}: CardProps) => {
  const { selectedPokemon } = usePokdex();

  return (
     <div className="flex justify-center min-w-md mx-4 my-2">  
      <div className="md:shrink-0">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={`${getPokemonImage(selectedPokemon.id)}`} alt="pokemon_image"/>
      </div>    
     </div>
  )
}

export default PokemonImage;