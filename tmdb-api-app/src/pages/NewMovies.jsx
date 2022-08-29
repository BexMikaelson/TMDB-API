
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { Modal} from 'react-bootstrap';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'


const NewMovie = ({movie}) => {

  const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    return ( 
    <Container className='d-flex'>
      <div className=' '>

         <Card.Body style={{width:'10rem'}} className='Card'>
             <Card.Img variant='top' src={API_IMG+movie.poster_path} alt="" />
             <Card.Title>{movie.title}</Card.Title>
             <Card.Text> {movie.overview} </Card.Text>
             
             <Link to= {'/MovieInfo'} >
             <Button>Movie info</Button>
             </Link>

             <button type="button" className="btn btn-dark" onClick={handleShow} >Movie info</button>
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
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
             



         </Card.Body>
      </div>
    </Container>
       
        
     );
}
 
export default NewMovie;


