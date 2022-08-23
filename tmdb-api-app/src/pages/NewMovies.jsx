import {useQuery} from 'react-query';
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

import {Link} from 'react-router-dom'


const NewMovie = ({movie}) => {
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
             



         </Card.Body>
      </div>
    </Container>
       
        
     );
}
 
export default NewMovie;


