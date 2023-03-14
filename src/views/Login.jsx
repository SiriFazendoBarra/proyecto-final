
import { useLoginContext } from "../context/LoginContext"

export default function Login() {

    const {getUser, setEmail, setPassword} = useLoginContext()
          
    const handleLogin = (e)=> {
        e.preventDefault()
        getUser()
             
    }

    return (
        <div className="page">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2>Welcome!</h2>
                <h3>we've waiting for you!</h3>
                <form className="d-flex flex-column align-items-center gap-2 my-4 formLogin" action="" onSubmit={handleLogin}>
                    <input className='form-control' type="text" placeholder='your@email.com' onChange={(e)=> setEmail(e.target.value)} />
                    <input className='form-control' type="text" placeholder='your password' onChange={(e)=> setPassword(e.target.value)}/>
                    <button className='btn btn-light' type="submit" >Login</button>
                </form>
                <p className="m-auto">Forgot your password?, <a href="">click here</a> </p>
                <p className="m-auto" >Don't have account?, <a href="">click here</a> </p>
            </div>

        </div>
    )
}