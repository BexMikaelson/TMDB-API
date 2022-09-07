/*import { useQuery } from 'react-query'
import { getActor } from '../api/axios'
import { useState } from 'react'
import MovieModal from '../components/MovieModal'
import PageButton from '../components/PageButton'
import Genres from "../components/Genres"
import useGenre from '../components/hooks/useGenre'
import { useParams } from 'react-router-dom'


/*const actorPage = () => {
    const { actor_id } = useParams()
    
    


    const {
        isLoading,
        isError,
        error,
        data,
        
    } = useQuery(['/person', actor_id], () => getActor(actor_id ), {
        keepPreviousData: true
    })

    if (isLoading) return <p>Loading Users...</p>

    if (isError) return <p>Error: {error.message}</p>

    const content = data.data?.map(movie => <MovieModal key={homePageMovie.id} movie={movie} />)

    

    return (
        <>
		<Container>
    <h1>Actor Page</h1>

    {isLoading && (<p className='my-3'>Loading ...</p>)}

    {isError && (<Alert>
        <p>Oh no, error!</p>
        <p>{error.message}</p>
    </Alert>)}

    {data && (
    <>
    <h1>{data.name}</h1>
    <div>
        <div className='d-flex'>
            <img className='img-fluid' src=''/>
                <div className='info-box'>
                    <p>Born: {data.birthday}</p>
                    <p>From: {data.place_of_birth}</p>
                    <p>About: {data.biography}</p>
                </div>
        </div>
            <hr />
            <h3>Films:</h3>
                <div className='List-Wrapper'>
                    {data.credits.cast.map(cred =>(
                        <ListGroup key={cred.id} className="w-20 filmCard">
                            {cred.poster_path && (
                                <img src={`https://image.tmdb.org/t/p/w300${cred.poster_path}`} />
                            )}
                                <ListGroupItem>{cred.title}</ListGroupItem>
                                <ListGroupItem>{cred.character}</ListGroupItem>
                                <Button as={Link} to={`/movie/${cred.id}`} variant="primary">Read more....</Button>
                        </ListGroup>
                    ))}
                </div>
        </div>
    </>
    )}
    </Container>
        </>
    )
}
export default actorPage*/

const jnvkjfnvkr = () => {
    return ( 
        <></>
     );
}
 
export default jnvkjfnvkr;
