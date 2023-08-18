import Container from 'react-bootstrap/Container'
import CinemaMoviesPage from './CinemaMoviesPage'

const HomePage = () => {
	return (
		<Container className="py-5">
			<h1>THE MOVIE DATABASE</h1>
			<CinemaMoviesPage></CinemaMoviesPage>
		</Container>
	)
}

export default HomePage