import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import React from "react";
import { getMovieInfoPage, getMovieCredits } from "../api/axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel';

const API_IMG = "https://image.tmdb.org/t/p/w500";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const MovieInfo = () => {
	const { movie_id } = useParams();

	const { data: movie, isLoading, isError, error } = useQuery(
		["movieinfo", movie_id],
		() => getMovieInfoPage(movie_id),
		{
			keepPreviousData: true,
		}
	);
	const {data: credits, isLoading: isLoadingCredits, isError: isErrorCredits, error: errorCredits} = useQuery(['movieCredits', movie_id], () => getMovieCredits(movie_id))

	if (isLoading || isLoadingCredits) return <LoadingSpinner />;

	if (isError || isErrorCredits) return <p>Error Movie: {error?.message}. Error Credits: {errorCredits?.message}</p>;

	// const handleShow = () => {}
	return (
		<Container className="container">
			{/* <div className="movieModal ">
				<Card.Body style={{ width: "10rem" }} className="Card">
					<Card.Img
						variant="top"
						src={API_IMG + movie.poster_path}
						alt=""
					/>
					<Card.Title>{movie.title}</Card.Title>

					<p> {movie.release_date}</p>
					<p> {movie.cast} </p>

					<Button as={Link} to={`/MovieInfo/${movie_id}`} variant="primary">Read more....</Button>

					<div className='info-button'>
						<button
							type="button"
							className="btn btn-dark"
							onClick={handleShow}
						>
							Movie info
						</button>
					</div>
				</Card.Body>
			</div> */}


					<img
						className="card-img-top"
						style={{ width: "14rem" }}
						src={API_IMG + movie.poster_path}
					/>
					<h3>{movie.title}</h3>
					<h4>IMDb: {movie.vote_average}</h4>
					<h5>Release Date: {movie.release_date}</h5>

					<br></br>
					<h6>Overview</h6>
					<p>{movie.overview}</p>

					<div>
						<h3>Cast</h3>
						{credits?.cast && <Carousel cast={credits.cast} />}
					</div>

		</Container>
	);
};

export default MovieInfo;
