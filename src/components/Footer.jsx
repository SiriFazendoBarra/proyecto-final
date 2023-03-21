import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import { NavLink } from 'react-router-dom'

export default function Footer() {

    const handleForm = (e) => {
        e.preventDefault()
    }

    return (
        <footer className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container d-flex flex-wrap gap-3 gap-md-0 justify-content-center justify-content-sm-between ">
                <form className="animation-zoom-card" onSubmit={() => handleForm()} >
                    <p className="text-center text-sm-start">Do you want to subscribe?</p>
                    <div className="d-flex gap-2">
                        <input type='email' className="form-control m-auto" typeof="text" placeholder="your@email.com" />
                        <MdEmail role='button' type="submit" className="ico-email animation-zoom" />
                    </div>

                </form>

                <div className="d-flex flex-column justify-content-between align-items-center animation-zoom-card">
                    <p className="m-0">Social media</p>
                    <div className="social-ico-div d-flex justify-content-between gap-3">
                        <p role='button'> <a className="text-light " href="http://www.instagram.com"><FaInstagram className="animation-zoom" /></a> </p>
                        <p role='button'><a className="text-light " href="http://www.facebook.com"><FaFacebook className="animation-zoom" /></a> </p>
                        <p role='button'><a className="text-light " href="http://www.twitch.tv"><FaTwitch className="animation-zoom" /></a></p>
                    </div>


                </div>
                <div className="d-flex justify-content-between animation-zoom-card">
                    <NavLink className="navbar-brand animation-zoom" to="/"><img className='img-fluid logo' src="/logo.jpg" alt="logo" /></NavLink>
                    <div>
                        <p role='button' className="m-0 animation-zoom" ><NavLink className="animation-zoom" to='/about'> About us </NavLink ></p>
                        <p role='button' className="m-0 animation-zoom" ><NavLink className="animation-zoom" to='/emailus' >Wanna mail us?</NavLink> </p>
                        <p role='button' className="m-0 animation-zoom" ><NavLink className="animation-zoom" to='/terms'>Terms and conditions</NavLink> </p>
                    </div>
                </div>


            </div>

        </footer>
    )
}