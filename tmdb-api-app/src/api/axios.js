import axios from "axios"





export const axiosGenreList = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getGenreListPage = async (pageParam = 1, genreforURL) => {
    const response = await axiosGenreList.get(`/discover/movie?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits&page=${pageParam}&with_genres=${genreforURL}`)
    return response.data
}

export const axiosMostPopularMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getMostPopularMoviesPage = async (pageParam = 1, genreforURL) => {
    const response = await axiosMostPopularMovies.get(`/movie/popular?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits&page=${pageParam}&with_genres=${genreforURL}`)
    return response.data
}

//Get LatestMavies
export const axiosLatestMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getLatestMoviesPage = async (pageParam = 1, genreforURL) => {
    const response = await axiosLatestMovies.get(`/movie/now_playing?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits&page=${pageParam}&with_genres=${genreforURL}`)
    return response.data
}


//Get TopMovies
export const axiosTopMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getTopMoviePage = async (pageParam = 1, genreforURL) => {
    const response = await axiosTopMovies.get(`/movie/top_rated?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits,&page=${pageParam}&with_genres=${genreforURL}`)
    return response.data
}


// Get an actor
export const axiosActor = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


export const getActor = async (person_id) => {
    const response = await axiosActor.get(`/person/${person_id}?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&append_to_response=credits`)
    return response.data
}

//Get the Credits
export const axiosCredit = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})


export const getCredits = async () => {
    const response = await axiosCredit.get(
        'https://api.themoviedb.org/3/movie/movie_id/credits?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US'
      );
    return response.data
}

