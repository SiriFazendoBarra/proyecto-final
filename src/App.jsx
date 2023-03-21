
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/styles/css/index.css'

import { Route, Routes } from 'react-router-dom'
import { useLoginContext } from './context/LoginContext'

import NavBar from './components/NavBar'
import Nav2 from './components/Nav2'
import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'
import Profile from './views/Profile'
import Error404 from './views/Error404'
import Footer from './components/Footer'
import UserPublications from './views/UserPublications'
import AddNew from './views/AddNew'
import Cart from './views/Cart'
import Item from './views/Item'
import Favorites from './views/Favorites'
import About from './views/About'
import Emailus from './views/Emailus'
import Terms from './views/Terms'


function App() {

  const { user } = useLoginContext()

  return (
    <div className="App">
      <NavBar />
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/emailus' element={<Emailus />} />
        <Route path='/market/:id' element={<Item />} />
        <Route path={`/${user.name}`} element={<Profile />} />
        <Route path={`/${user.name}/favorites`} element={<Favorites />} />
        <Route path={`/${user.name}/cart`} element={<Cart />} />
        <Route path={`/${user.name}/publications`} element={<UserPublications />} />
        <Route path={`/${user.name}/publications/addnew`} element={<AddNew />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
