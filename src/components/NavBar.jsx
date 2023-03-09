import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    return (
        <div className='NavBar'>
            <Navbar variant="dark">
                <Container className='d-flex justifycontent-between gap-1'>
                    <NavLink className="navbar-brand" to="/"><img className='img-fluid logo' src="../../public/logo.jpg" alt="logo" /></NavLink>
                    <InputGroup className="InputGroup">
                        <Form.Control
                            className='my-auto'
                            placeholder="Do you want to search something?"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='my-auto' variant="outline-secondary" id="button-addon2">Search</Button>
                    </InputGroup>
                    <Nav className="Nav ">
                        <NavLink className="nav-link my-auto" to="/login">Login</NavLink>
                        <NavLink className="nav-link my-auto" to="/register">Register</NavLink>
                        <NavLink className="nav-link my-auto" to="/options">Options</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}