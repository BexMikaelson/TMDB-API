import axios from "axios"



export const axiosTwo = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export const getTopRatedMovie = async (pageParam = 1) => {
    const response = await axiosTwo.get(`/movie/top_rated?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&page=${pageParam}`)
    return response.data
}