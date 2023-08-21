import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown  from 'react-bootstrap/Dropdown'
import { Link, NavLink } from 'react-router-dom'
import { getGenres} from '../services/TMDB'
import { useQuery } from 'react-query'

const Navigation = () => {
	const {data} = useQuery(['genres'], getGenres)
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Your Ultimate Movie API</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} end to="/now_playing">Cinema Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular">Popular Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/top_rated">Top Rated Movies</Nav.Link>
						{data && (
							<Dropdown>
								<Dropdown.Toggle variant="dark" id="dropdown-basic">Movie Genres</Dropdown.Toggle>
								<Dropdown.Menu>
									{data.genres.map(gen => (
										<Dropdown.Item value="1" key={gen.id} size="sm" as={NavLink} to={`/genres/${gen.id}`}>{gen.name}</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
