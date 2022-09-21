const API_IMG = 'https://image.tmdb.org/t/p/w500'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { Modal} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Genres from './Genres';
import Carousel from '../components/Carousel/Carousel';
import axios from "axios";
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


import '../components/Carousel/Carousel.css'




const movieModal = ({ movie, media_type,}) => {
  const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    const id = movie.id; 

    const {data, isLoading, isError, error} = useQuery(['movie', id], async()=>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`)
      return res.data
    })
      
    return ( 
    <Container className='container'>
      <div className='movieModal '>
          <Card.Body style={{width:'10rem'}} className='Card'>
             <Card.Img variant='top' src={API_IMG+movie.poster_path} alt="" />
             <Card.Title>{movie.title}</Card.Title>
             
             <p> {movie.release_date}</p>
             <p> {movie.cast} </p>
             
             <button  type="button" className="btn btn-dark" onClick={handleShow} >Movie info</button>
         </Card.Body>
      </div> 
             
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+movie.poster_path} />
                      <h3>{movie.titel}</h3>
                      <h4>IMDb: {movie.vote_average}</h4>
                      <h5>Release Date: {movie.release_date}</h5>
                      
                      <br></br>
                      <h6>Overview</h6>
                      <p>{movie.overview}</p>

                      <div>
                    {data?.cast && (<Carousel cast={data.cast} />)}
                  </div>
                      
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
    </Container>
       
        
     );
}
 
export default movieModal;


