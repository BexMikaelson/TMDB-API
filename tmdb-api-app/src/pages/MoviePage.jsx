const moviePage = () => {
  return ( <div></div> );
}
 
export default moviePage;

// const API_IMG = 'https://image.tmdb.org/t/p/w500'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button';
// import { Modal} from 'react-bootstrap';
// import React, {useState} from 'react';
// import {Link} from 'react-router-dom'

// import Carousel from '../components/Carousel/Carousel';
// import axios from "axios";
// import { useQuery } from 'react-query';



// import '../components/Carousel/Carousel.css'

// const MoviePage = ( {movie} ) => {
//   const id = movie; 

//     const {data, isLoading, isError, error} = useQuery(['movie', id], async()=>{
//       const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`)
//       return res.data
//     })
//     console.log({data})
    
//   return ( 
//   <div>
    
//     {data.results?.map((movie)=>(
//       <div key={movie.id}>
//         <img className="card-img-top" style={{width:'14rem'}}src={API_IMG +movie.poster_path} />
//                       <h3>{movie.titel}</h3>
//                       <h4>IMDb: {movie.vote_average}</h4>
//                       <h5>Release Date: {movie.release_date}</h5>
                      
//                       <br></br>
//                       <h6>Overview</h6>
//                       <p>{movie.overview}</p>

//                       <div>
//                     {data?.cast && (<Carousel cast={data.cast} />)}
//                   </div>
//       </div>
//     ))}

//   </div>
   
//   );
// }
 
// export default MoviePage;