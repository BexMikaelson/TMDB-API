import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Your Ultimate Movie API</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} end to="/latestMovies">Latest Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/topMovies">Top Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/mostPopularMovies">Popular Movies</Nav.Link>
						
					</Nav>
					<DropdownButton id="dropdown-basic-button" title="Dropdown button" bg="dark" variant="dark">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
