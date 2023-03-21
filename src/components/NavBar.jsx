import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';

import { FaHeart, FaShoppingCart, FaStore, FaHouseUser, FaUser, FaUserPlus } from 'react-icons/fa'
import { ImExit, ImUser, ImUserPlus } from 'react-icons/im'
// import { HiUserPlus, HiUser } from 'react-icons/hi'


import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';
import { useCartContext } from '../context/CartContext';
import { useSearchContext } from '../context/SearchContext';
import { useState } from 'react';

export default function NavBar() {

    const { logged, setLogged, setPassword, setEmail, user } = useLoginContext()
    const { cart, cartAmount } = useCartContext()
    const { setSearchBar, setCategories } = useSearchContext()
    const [inputBar, setInputBar] = useState("")
    const navigate = useNavigate()

    const handleLogout = () => {

        setLogged(false)
        setPassword("")
        setEmail("")
        setUser({})

    }

    const handleSearchClick = (e, inputBar) => {
        e.preventDefault()
        setSearchBar(inputBar)
    }

    const handleLogoClick = () => {
        setSearchBar("")
        setCategories("")


    }
    return (
        <div className='NavBar'>
            <Navbar variant="dark">
                <Container className='d-flex justifycontent-between gap-3 gap-md-0 flex-wrap'>
                    <NavLink className="navbar-brand animation-zoom" to="/" onClick={() => handleLogoClick()}><img className='img-fluid logo' src="/logo.jpg" alt="logo" /></NavLink>
                    <form className='d-flex col-4 animation-zoom-card' action="" onSubmit={(e) => handleSearchClick(e, inputBar)}>
                        <div className='input-group'>
                            <input
                                className='my-auto form-control'
                                placeholder="Do you want to search something?"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setInputBar(e.target.value)}
                            />
                            <Button className='my-auto' variant="outline-secondary" id="button-addon2" type='submit' >Search</Button>
                        </div>

                    </form>
                    <p className='m-0 h5'>Hi, {user.name}</p>
                    <Nav className="Nav  ">
                        {!logged ? <NavLink className="my-auto animation-zoom" to="/login"><ImUser /> </NavLink> : null}
                        {!logged ? <NavLink className="nav-link my-auto" to="/register"><ImUserPlus /></NavLink> : null}
                        {logged ? <NavLink className="nav-link my-auto" to={`${user.name}`}><FaHouseUser /></NavLink> : null}
                        {logged ?
                            <div >
                                <NavLink className="nav-link my-auto position-relative" to={`${user.name}/cart`}>
                                    <FaShoppingCart />
                                    {cart.length > 0 ? <span className="cart-count position-absolute top-0 start-50 translate-middle badge border border-light rounded-circle bg-danger p-2">
                                        {cartAmount}
                                    </span>
                                        : null}

                                </NavLink>
                            </div>
                            :
                            null}
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