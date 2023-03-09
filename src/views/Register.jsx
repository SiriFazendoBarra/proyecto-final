export default function Register() {
    return (
        <div className="page">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2>Register</h2>
                <h3>Join us :D</h3>
                <form className="d-flex flex-column align-items-center gap-2 my-4 formLogin" action="">
                    <input className='form-control' type="email" placeholder='your@email.com' />
                    <input className='form-control' type="text" placeholder='username' />
                    <input className='form-control' type="text" placeholder='name' />
                    <input className='form-control' type="date" placeholder='birthday' />
                    <input className='form-control' type="password" placeholder='password' />
                    <input className='form-control' type="password" placeholder='confirm password' />
                    <button className='btn btn-light'>Join</button>
                </form>
                <div className="d-flex flex-column justify-content-start">
                    <div className="d-flex gap-1">
                        <input className="form-check-input" type="checkbox" name="" id="" />
                        <p className="my-auto">I accept the terms and conditions of <a href="">Player 2</a> </p>
                    </div>
                    <div className="d-flex gap-1">
                        <input className="form-check-input" type="checkbox" name="" id="" />
                        <p className="my-auto" >Add me to BusinessName's <a href="">newsletter</a> (Optional) </p>
                    </div>
                </div>


            </div>


        </div>
    )
}