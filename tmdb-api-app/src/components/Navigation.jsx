import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<Navbar className="header" bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Your Ultimate Movie API
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/latestMovies">
							Latest Movies
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/topMovies">
							Top Movies
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/mostPopularMovies">
							Popular Movies
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
