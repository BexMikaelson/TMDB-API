import React from 'react'
import { useParams, Link} from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { getMovie } from '../services/TMDB'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button'
import  ListGroup  from 'react-bootstrap/ListGroup'
import { ListGroupItem } from 'react-bootstrap'


const MoviePage = () => {
    const { movie_id } = useParams()
    const { data, isLoading, error, isError} = useQuery(['movie', movie_id], () => getMovie(movie_id))
    
  return (
    
    <Container>
        
    <h3>Movie Page</h3>
    {isLoading && (<p className='my-3'>Loading ...</p>)}

    {isError && (
        <Alert>
            <p> error!</p>
            <p>{error.message}</p>
        </Alert>)}

        {data && (
            <>
            <div>
                <hr />
                <div className='d-flex flex-wrap container justify-content-between'>
                {data.poster_path &&(
                    <img className='img-fluid' src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
                )}
                
                    <div className='info-box col-md-7'>
                    <h3 className='pb-3'>{data.title}</h3>
                        <p>Genre:{data.genres.map(gen => gen.name)}</p>
                        <p>Released:{data.release_date}</p>
                        <p>Runtime:{data.runtime}</p>
                        <h3>Overview</h3>
                        <p>{data.overview}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3>Cast:</h3>
                <div className='List-Wrapper container d-flex flex-wrap justify-content-between'>
                    {data.credits.cast.map(cred => (
                        <ListGroup key={cred.id} className='castList mt-4 row-gx-5'>
                            <ListGroupItem className='listGroupItem'>
                            {cred.profile_path && (
                                <img src={`https://image.tmdb.org/t/p/w500${cred.profile_path}`} />
                            )}
                                <p>{cred.name}</p>
                                <p>Character: {cred.character}</p>
                                <Button className='mt-auto' as={Link} to={`/actor/${cred.id}`} variant="primary">Show Info</Button>
                                </ListGroupItem>
                        </ListGroup>
                    ))}
                </div>
            </div>

        </>
        )}
    </Container>
  )
}

export default MoviePage