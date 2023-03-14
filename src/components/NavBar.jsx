import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';

export default function NavBar() {

    const { logged, setLogged, setPassword, setEmail, user } = useLoginContext()

    const handleLogout = () => {

        setLogged(false)
        setPassword(null)
        setEmail(null)

    }
    return (
        <div className='NavBar'>
            <Navbar variant="dark">
                <Container className='d-flex justifycontent-between gap-1'>
                    <NavLink className="navbar-brand" to="/"><img className='img-fluid logo' src="/logo.jpg" alt="logo" /></NavLink>
                    <InputGroup className="InputGroup">
                        <Form.Control
                            className='my-auto'
                            placeholder="Do you want to search something?"
                            aria-describedby="basic-addon2"
                        />
                        <Button className='my-auto' variant="outline-secondary" id="button-addon2">Search</Button>
                    </InputGroup>
                    <Nav className="Nav ">
                        {!logged ? <NavLink className="nav-link my-auto" to="/login">Login</NavLink> : null}
                        {!logged ? <NavLink className="nav-link my-auto" to="/register">Register</NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`${user.name}`}>My Profile</NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`${user.name}/cart`}>Cart</NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`/${user.name}/publications`}>My Publications</NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`/${user.name}/favorites`}>Favorites</NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to="/login" onClick={handleLogout}>Logout</NavLink> : null}
                        {/* {logged ? <NavLink className="nav-link my-auto" to="/options">Options</NavLink> : null} */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}