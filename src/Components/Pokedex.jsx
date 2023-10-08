import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'


const Pokedex = (props) => {
    console.log(props)
  return (
    <div className='Pokedex'>
        <h1>Pokedex</h1>
        <p>{props.exp}</p>
        <p>  {props.isWinner ? "Winner" : "Loser"} </p>
        <div className='Pokedex-cards'>
            {props.pokemon.map((p) =>
                <Pokecard 
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />
            )}
        </div>


    
    </div>
  )
}




export default Pokedex