import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import {getActor} from '../api/axios'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Button from 'react-bootstrap/Button'
const API_IMG = 'https://image.tmdb.org/t/p/w500'
import axios from 'axios'


const ActorPage = () => {
    const { person_id } = useParams()
    {/*const { data, isLoading, isError, error} = useQuery(['actor', person_id ], () => getActor(person_id))*/}

    const{data, isLoading, isError, error} = useQuery(['person', person_id ],async ()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`);
        return res.data;
    })

  return (
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
    <hr />
    <div>
        <div className='d-flex'>
          <img className='img-fluid' src={API_IMG+data.profile_path}/>
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
                                <img src={API_IMG+cred.poster_path} />
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

  )
}

export default ActorPage




{/*import { useQuery } from "react-query";
import axios from "axios";
import useActor from '../components/hooks/useActor'
import { useState } from "react";
const Actors = () => {
    const [person_id, setperson_id] = useState("");

    const{data, isLoading, isError, error} = useQuery(['person'],async ()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`);
        return res.data;
    })

    if (isError){
        return <p> {error.message} </p>
    }

    if (isLoading){
        return <h2>Loading...</h2>
    }




    return ( 
    <div>
        {data.data.map(()=>  )}

    </div> 
    );
}
 
export default Actors;

const Actors = () => {
    //const person_id =[]
    const{data, isLoading, isError, error, person_id} = useQuery(['person'],async ()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/person/${person_id}?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`);
        return res.data;
    })
    
   

    if (isError){
        return <p> {error.message} </p>
    }

    if (isLoading){
        return <h2>Loading...</h2>
    }
    person_id = data.data?.map((people)=>{
        return <p key={people.name}> {people.name} </p>
    })


    return ( 
        <div>Actors
            <div>
                 
                 {data.data?.map(people => <div key={people.name}> {people.name}</div> )}
      
            </div>
             
            

             
       
        </div>
     );
}
 
export default Actors;


//import  useActorsData  from "../components/hooks/useActorsData";
//import useActor from '../components/hooks/useActor'
//import {useParams} from 'react-router-dom'


const actorsPage = () => {
const onSucces = (data)=>{
    console.log('Perform side effect after data fetching', data)
}

const onError = (error) =>{
    console.log('Perform side effect after encountering error', error)
}

const { isLoading, data, isError, error, isFetching, refetch} = useActor(onSucces, onError)

console.log({isLoading, isFetching})

if (isLoading || isFetching) {
    return <h2>Loading...</h2>
}

if (isError){
    return <h2> {error.message} </h2>
}

  {/*const { person_id } = useParams()
  const { isLoading, data, isError, error } = useActor(person_id)

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.error}</h2>
    }

    
    console.log(data)
    return ( 
    <div>Actors Page
       {/*<p> {data?.data.name} </p>
       {data?.data.map((person) => {
           return <div key={person.id}> {person.name} </div>
       }

       )}
           
    </div> 
    
    );
    
}
 
export default actorsPage;*/}