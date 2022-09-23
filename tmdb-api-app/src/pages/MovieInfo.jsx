import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import React from "react";
import { getMovieInfoPage } from '../api/axios'
import LoadingSpinner from '../components/LoadingSpinner'



const MovieInfo = () => {
	const { movie_id } = useParams();

	const{data, isLoading, isError, error} = useQuery(['movieinfo', movie_id ], ()=> getMovieInfoPage(movie_id), {
        keepPreviousData: true
     } 
    )
	
	if (isLoading) return <LoadingSpinner></LoadingSpinner> 

    if (isError) return <p>Error: {error.message}</p>

	console.log({ data });

	return <div>movie info</div>;
};

export default MovieInfo;
