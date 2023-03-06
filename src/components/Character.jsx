import React from 'react'

function Character({ character }) {
    return (
        <div className='card m-3 bg-success text-black text-center p-5'>
            <h3>{character.name}</h3>
            <img className='img-fluid card-img-top rounded-pill' src={character.image} alt={character.name} />
            <ul className='mt-3 list-group list-group-flush'>
                <li className='bg-success list-group-item'>{character.species}</li>
                <li className='bg-success list-group-item'>{character.status}</li>
            </ul>
        </div>
    )
}

export default Character