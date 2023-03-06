import { useEffect, useState } from 'react'
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import Character from './Character'

function NavPage (props) {
    return (
        <header className='d-flex justify-content-between'>
            <button className='btn btn-outline-danger btn-md m-4' onClick={() => props.setPage(props.page - 1)}>
                {props.page - 1}<VscArrowLeft className='m-1' />
                Before 
            </button>
            <h3 className='mt-4'>Page: {props.page}</h3>
            <button className='btn btn-outline-success btn-md m-4' onClick={() => props.setPage(props.page + 1)}>
                After <VscArrowRight className='m-1' />
                {props.page + 1} 
            </button>
        </header>
    )
}

function CharacterList() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);;

    useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        setLoading(false)
        setCharacters(data.results)
    }

    fetchData()
    }, [page])

    if (loading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className='container bg-dark'>

            <NavPage page={page} setPage={setPage} />

            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className='row'>
                        {characters.map(character => {
                            return (
                                <div className='col-md-4' key={character.id}>
                                    <Character  character={character} />
                                </div>
                            )
                        })}
                    </div>
                )
            }
            <NavPage page={page} setPage={setPage} />
        </div>
    )
}

export default CharacterList