import React from 'react'

const Pokemon = ({pokemon}) => {

    return (
        <article className='articlePoke'>
            <img className='imgPoke' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <h2 className='namePoke'>{pokemon?.name}</h2>
            <p><samp>Type:</samp>{pokemon?.types[0].type.name}</p>
            <ul className='ulPoke'>
                <li><b>Height:</b>{pokemon?.height}</li>
                <li><b>weight:</b>{pokemon?.weight}</li>
            </ul>
        </article>
    )
}

export default Pokemon