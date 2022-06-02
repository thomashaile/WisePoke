import React from 'react'

type Props = {}

const PokemonEvolutie = (props: Props) => {
  return (
    <div className="col-end-7 flex flex-col items-left m-3"> 
    <p className="ml-3 text-white font-semibold text-lg uppercase">Evolutie</p>             
    <div className="flex flex-1 flex-wrap rounded-lg shadow-lg bg-white max-w-md mx-4 h-48 row-span-auto">    
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
        </div>
    </div>
   </div>
  )
}

export default PokemonEvolutie