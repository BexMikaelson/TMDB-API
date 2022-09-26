import axios from "axios"
import { useEffect } from "react"
import { Button } from "react-bootstrap"


const VITE_API_KEY = import.meta.env.VITE_API_KEY



const Genres = ( {selectedGenres, setSelectedGenres, genres, setGenres, type, setPage,} ) => {

    const handleAdd = (genre)=> {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter((g)=>g.id !== genre.id))
        setPage(1)
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected)=> selected.id !== genre.id)
            
        )
        setGenres([...genres, genre])
        setPage(1)
    }

    const fetchGenres = async() =>{
       
         
         const {data} = await axios.get(`https://api.themoviedb.org/3/genre/list?api_key=${VITE_API_KEY}&language=en-US`)

         setGenres(data.genres)
    }
    
     console.log(genres)

    useEffect(()=>{
        fetchGenres()

        return () =>{
            setGenres([])
        }
    },[])
    
    return ( 
        
    <div className="genres container ">
        <h4>Genres</h4>
        <div>
        {selectedGenres && selectedGenres?.map((genre) => <Button key={genre.id} type="button" className="btn btn-primary" onClick={()=> handleRemove(genre)}> {genre.name} </Button>   )}

        {genres && genres?.map((genre => <Button key={genre.id} type="button" className="btn btn-dark" onClick={()=> handleAdd(genre)}> {genre.name} </Button>   ))}
        </div>
        
       

    </div> 
    );
}

export default Genres;