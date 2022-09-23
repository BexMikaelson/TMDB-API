import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const API_IMG = 'https://image.tmdb.org/t/p/w300'
import "./Carousel.css";
import { Link } from "react-router-dom";



const handleDragStart = (e) => e.preventDefault();

const Gallery = ( {cast} ) => {
  
   const items = cast?.map(person => (
     
     <Link as="div" to={`/ActorsPage/${person.id}`} className="carouselItem" key={person.id}>
       <div className="caroucel-image">
        <img
          src={`${API_IMG}${person.profile_path}`}
          alt={person.name}
          onDragStart={handleDragStart}
          className="carouselItem__img"
        />
        </div>
        <div className="carousel-text-container">
        <p className="carouselItem__txt"> {person.name}</p> 
        
        <p className="carouselItem__txt">( {person.character}(</p>
        </div>
          
          More info
          
       </Link>
  ));

  

  const responsive = {
    0: {
      items: 3,
    },
    300: {
      items: 2,
    },
  };

  return (  
    <AliceCarousel 
      responsive={responsive}
      items={items}
      
    />
  );
};

export default Gallery;