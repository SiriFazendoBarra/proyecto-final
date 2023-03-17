import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';

import { FaHeart, FaShoppingCart, FaStore, FaHouseUser, FaUser, FaUserPlus } from 'react-icons/fa'
import { ImExit, ImUser, ImUserPlus } from 'react-icons/im'
// import { HiUserPlus, HiUser } from 'react-icons/hi'


import { NavLink } from 'react-router-dom';
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
                <Container className='d-flex justifycontent-between gap-3 gap-md-0 flex-wrap'>
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
                        {!logged ? <NavLink className="nav-link my-auto" to="/login"><ImUser /> </NavLink> : null}
                        {!logged ? <NavLink className="nav-link my-auto" to="/register"><ImUserPlus /></NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`${user.name}`}><FaHouseUser /></NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`${user.name}/cart`}><FaShoppingCart /></NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`/${user.name}/publications`}> <FaStore /></NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`/${user.name}/favorites`}><FaHeart /></NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to="/login" onClick={handleLogout}><ImExit /></NavLink> : null}
                        {/* {logged ? <NavLink className="nav-link my-auto" to="/options">Options</NavLink> : null} */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}