import Container from 'react-bootstrap/Container'
import CinemaPage from './CinemaPage'

const HomePage = () => {
	return (
		<Container className="py-5">
			<h1>THE MOVIE DATABASE</h1>
			<CinemaPage></CinemaPage>
		</Container>
	)
}

export default HomePage