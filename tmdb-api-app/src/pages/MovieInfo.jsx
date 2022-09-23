import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import React from "react";

const MovieInfo = () => {
	const { movie_id } = useParams();
	const { data, isLoading, isError, error } = useQuery(
		["movie", movie_id],
		async () => {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=05f52796b7985ed1e09a4067b247940c&language=en-US&include_adult=false&append_to_response=credits`
			);
			return res.data;
		}
	);
	console.log({ data });

	return <div>movie info</div>;
};

export default MovieInfo;
