import axios from "axios"





export const axiosGenreList = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getGenreListPage = async () => {
    const response = await axiosGenreList.get(`/discover/movie?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&with_genres=name`)
    return response.data
}

export const axiosMostPopularMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getMostPopularMoviesPage = async (pageParam = 1) => {
    const response = await axiosMostPopularMovies.get(`/movie/popular?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&page=${pageParam}`)
    return response.data
}

export const axiosLatestMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getLatestMoviesPage = async (pageParam = 1, genreforURL) => {
    const response = await axiosLatestMovies.get(`/movie/now_playing?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits&page=${pageParam}&with_genres=${genreforURL}`)
    return response.data
}



export const axiosTopMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getTopMoviePage = async (pageParam = 1) => {
    const response = await axiosTopMovies.get(`/movie/top_rated?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&page=${pageParam}`)
    return response.data
}

