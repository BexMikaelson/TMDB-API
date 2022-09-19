/*import axios from 'axios';
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
import AliceCarousel from 'react-alice-carousel';
//import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useEffect, useState } from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'
import { useQuery } from 'react-query'


const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);

  const items = credits?.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
} = useQuery(['/movie'], () => getCredits( ), {
    keepPreviousData: true
})

if (isLoading) return <p>Loading Users...</p>

if (isError) return <p>Error: {error.message}</p>

  /*const fetchCredits = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/movie_id/credits?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US'
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);*/

  /*return (
   
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />

  
    
  );
  
  
};

export default Gallery;*/

import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
import "./Carousel.css";
//import '../components/Carousel/Carousel.css'
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";



const handleDragStart = (e) => e.preventDefault();

const Gallery = () => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((c) => (
    <div className="carouselItem">
      <img
        src={API_IMG+c.profile_path}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const{movie_id}=useParams()
  const{data, isLoading, isError, error} = useQuery(['movie', movie_id], async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`)
    return res.data
  })

  useEffect(() => {
    
    setCredits([])
    
  }, []);

  return (
    <>
    
    <AliceCarousel 
    
    
      responsive={responsive}
      items={items}
      autoPlay
      
    />
    </>
  );
};

export default Gallery;