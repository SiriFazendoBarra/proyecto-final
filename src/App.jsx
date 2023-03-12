import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import Nav2 from './components/Nav2'
import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'
import Profile from './views/Profile'
import Error404 from './views/Error404'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Nav2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
