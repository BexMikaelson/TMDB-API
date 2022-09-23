import { useQuery } from "react-query";
import { getMostPopularMoviesPage } from "../api/axios";
import { useState } from "react";
import PageButton from "../components/PageButton";
import MovieModal from "../components/MovieModal";
import Genres from "../components/Genres";
import useGenre from "../components/hooks/useGenre";
import LoadingSpinner from '../components/LoadingSpinner'

const mostPopularMovies = () => {
	const [page, setPage] = useState(1);
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [genres, setGenres] = useState([]);
	const genreforURL = useGenre(selectedGenres);

	const { isLoading, isError, error, data, isFetching, isPreviousData } =
		useQuery(
			["popularmovies", page, genreforURL],
			() => getMostPopularMoviesPage(page, genreforURL),
			{
				keepPreviousData: true,
			}
		);

	if (isLoading) return <LoadingSpinner></LoadingSpinner>

	if (isError) return <p>Error: {error.message}</p>;

	const content = data.data?.map((movie) => (
		<MovieModal key={popularMovie.id} movie={movie} />
	));
	const totalPages = 10;
	const lastPage = () => setPage(totalPages);

	const firstPage = () => setPage(1);

	const pagesArray = Array(totalPages)
		.fill()
		.map((_, index) => index + 1);

	const nav = (
		<nav className="nav-ex2">
			<button onClick={firstPage} disabled={isPreviousData || page === 1}>
				&lt;&lt;
			</button>
			{isPreviousData}
			{pagesArray.map((pg) => (
				<PageButton key={pg} pg={pg} setPage={setPage} />
			))}
			<button
				onClick={lastPage}
				disabled={isPreviousData || page === totalPages}
			>
				&gt;&gt;
			</button>
		</nav>
	);

	return (
		<>
			<h1>Popular Movies</h1>
			<Genres
				type="movie"
				selectedGenres={selectedGenres}
				setSelectedGenres={setSelectedGenres}
				genres={genres}
				setGenres={setGenres}
				setPage={setPage}
			/>
			<div className="grid-container">
				{data.results?.map((movie) => (
					<MovieModal key={movie.title} movie={movie} />
				))}
			</div>

			{nav}
			{isFetching && <span className="loading">Loading...</span>}
			{content}
		</>
	);
};
export default mostPopularMovies;
