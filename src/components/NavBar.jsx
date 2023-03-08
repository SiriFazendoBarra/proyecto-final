import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className="navbar-brand" to="/">Logo</NavLink>
                    <Nav className="ms-auto">
                        <NavLink className="nav-link me-2" to="/login">Login</NavLink>
                        <NavLink className="nav-link me-2" to="/register">Register</NavLink>
                        <NavLink className="nav-link me-2" to="/options">Options</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}