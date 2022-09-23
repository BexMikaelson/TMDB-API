import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const VITE_API_KEY = import.meta.env.VITE_API_KEY

const get = async (endpoint) => {
    const response = await axios.get(endpoint)
    console.log(response.data)
    return response.data
}

//actorspage
export const getCharacters= (person_id) => {
    return get(`/person/${person_id}?api_key=${VITE_API_KEY}&language=en-US&include_adult=false&append_to_response=credits`);
}

export const getHomePage= (pageParam = 1, genreforURL) => {
    return get(`/discover/movie?api_key=${VITE_API_KEY}&language=en-US&include_adult=false&append_to_response=credits&page=${pageParam}&with_genres=${genreforURL}`)
}

export const getMovieInfoPage= (movie_id) => {
    return get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${VITE_API_KEY}&language=en-US&include_adult=false&append_to_response=credits`)
}

export const getMostPopularMoviesPage= (pageParam = 1, genreforURL) => {
    return get(`/movie/popular?api_key=${VITE_API_KEY}&language=en-US&include_adult=false&append_to_response=credits&page=${pageParam}&with_genres=${genreforURL}`)
}

export const getLatestMoviesPage= (pageParam = 1, genreforURL) => {
    return get(`/movie/now_playing?api_key=${VITE_API_KEY}&language=en-US&include_adult=false&append_to_response=credits&page=${pageParam}&with_genres=${genreforURL}`)
}

export const getTopMoviePage= (pageParam = 1, genreforURL) => {
    return get(`/movie/top_rated?api_key=${VITE_API_KEY}&language=en-US&include_adult=false&append_to_response=credits,&page=${pageParam}&with_genres=${genreforURL}`)
}


export default{
    getCharacters,
    getHomePage,
    getMovieInfoPage,
    getMostPopularMoviesPage,
    getLatestMoviesPage,
}

