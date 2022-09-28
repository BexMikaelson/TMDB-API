import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMovieInfoPage, getMovieCredits } from "../api/axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Carousel from "../components/Carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const API_IMG = "https://image.tmdb.org/t/p/w500";


const MovieInfo = () => {
	const { movie_id } = useParams();

	const {
		data: movie,
		isLoading,
		isError,
		error,
	} = useQuery(["movieinfo", movie_id], () => getMovieInfoPage(movie_id), {
		keepPreviousData: true,
	});
	const {
		data: credits,
		isLoading: isLoadingCredits,
		isError: isErrorCredits,
		error: errorCredits,
	} = useQuery(["movieCredits", movie_id], () => getMovieCredits(movie_id));

	if (isLoading || isLoadingCredits) return <LoadingSpinner />;

	if (isError || isErrorCredits)
		return (
			<p>
				Error Movie: {error?.message}. Error Credits:{" "}
				{errorCredits?.message}
			</p>
		);

	// const handleShow = () => {}
	return (
		<div className="container">
			<div className="card">
				<div className="">
					<img
						className="img-fluid-movie-poster"
						src={API_IMG + movie.poster_path}
					/>
					<div className="info-box">
						<h3>{movie.title}</h3>
						<h4>IMDb: {movie.vote_average}</h4>
						<h5>Release Date: {movie.release_date}</h5>

						<h6>Overview</h6>
						<p>{movie.overview}</p>
					</div>
				</div>

				<div className="container">
					<h3>Cast</h3>
					{credits?.cast && <Carousel cast={credits.cast} />}
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
