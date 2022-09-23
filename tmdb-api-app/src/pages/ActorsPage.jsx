import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button'
const API_IMG = 'https://image.tmdb.org/t/p/w500'
import { getCharacters } from '../api/axios'


const ActorPage = () => {
    const { person_id } = useParams()
   

     const{data, isLoading, isError, error} = useQuery(['person', person_id ], ()=> getCharacters(person_id), {
        keepPreviousData: true
     }
    )

  return (
    <>
    <h1 className='grid-container'>Actor Page</h1>

    {isLoading && (<p className='my-3'>Loading ...</p>)}

    {isError && (<Alert>
        <p>Oh no, error!</p>
        <p>{error.message}</p>
    </Alert>)}

    {data && (
    <>
    
    <hr />
    <div className='card'>
        <div className='grid-container '>
          <img className='img-fluid-actor' src={`${API_IMG}${data.profile_path}`}/>
          
                <div className='info-box'>
                <h2>{data.name}</h2>
                    <p>Born: {data.birthday}</p>
                    <p>From: {data.place_of_birth}</p>
                    <p>About: {data.biography}</p>
                </div>
        </div>
            <hr />
            <h3>Films:</h3>
                <div className='grid-container '>
                    {data.credits.cast.map(cred =>(
                        <ListGroup key={cred.id} className="w-20 filmCard">
                            {cred.poster_path && (
                                <img className='img-fluid-actor' src={`${API_IMG}${cred.poster_path}`} alt= '' />
                            )}
                                <ListGroupItem>Title: {cred.title}</ListGroupItem>
                                <ListGroupItem>Character: {cred.character}</ListGroupItem>
                                <div>
                                <Button className='info-button' as={Link} to={`/movie/${cred.id}`} variant="primary">Read more....</Button>
                                </div>
                        </ListGroup>
                    ))}
                </div>
        </div>
    </>
    )}
    </>

  )
}

 
export default ActorPage;


