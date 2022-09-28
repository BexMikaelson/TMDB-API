const API_IMG = "https://image.tmdb.org/t/p/w500";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../components/Carousel/Carousel.css";

const movieModal = ({ movie }) => {
	const id = movie.id;

	return (
		<Container className="container">
			<div className="movieModal ">
				<Card.Body style={{ width: "10rem" }} className="Card">
					<Card.Img
						variant="top"
						src={API_IMG + movie.poster_path}
						alt=""
					/>
					<Card.Title>{movie.title}</Card.Title>

					<p> {movie.release_date}</p>
					<p> {movie.cast} </p>

					<Button
						className="info-button"
						as={Link}
						to={`/MovieInfo/${id}`}
						variant="primary"
					>
						Movie info
					</Button>
				</Card.Body>
			</div>
		</Container>
	);
};

export default movieModal;
