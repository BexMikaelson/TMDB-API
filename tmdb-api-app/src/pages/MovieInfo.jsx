import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import React from "react";
import { getMovieInfoPage } from '../api/axios'
import LoadingSpinner from '../components/LoadingSpinner'

const API_IMG = 'https://image.tmdb.org/t/p/w500'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'






const MovieInfo = ( {movie} ) => {
	const { movie_id } = useParams();

	const{data, isLoading, isError, error} = useQuery(['movieinfo', movie_id ], ()=> getMovieInfoPage(movie_id), {
        keepPreviousData: true
     } 
    )
	
	if (isLoading) return <LoadingSpinner></LoadingSpinner> 

    if (isError) return <p>Error: {error.message}</p>

	console.log({ data });

	return <div>movie info

<div className='grid-container'>
                {/* {data.results?.map(movie => <MovieModal key={movie.id} movie={movie}/> )} */}

				{data.results?.map(movie => <div key={movie.id} > {movie.title} </div> )}
            </div>


		<Card.Body style={{ width: "10rem" }} className="Card">
					<Card.Img
						variant="top"
						src={API_IMG + movie.poster_path}
						alt=""
					/>
					<Card.Title>{movie.title}</Card.Title>

					<p> {movie.release_date}</p>
					<p> {movie.cast} </p>

					{/* <Button as={Link} to={`/MoviePage/${id}`} variant="primary">Read more....</Button> */}

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
	</div>;
};

export default MovieInfo;
