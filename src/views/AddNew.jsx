export default function AddNew() {
    return (
        <div className="page">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2>Add something new!</h2>
                
                <form className="d-flex flex-column align-items-center gap-2 my-4 formLogin" action="">
                    <input className='form-control' type="email" placeholder='your@email.com' />
                    <input className='form-control' type="text" placeholder='username' />
                    <input className='form-control' type="text" placeholder='name' />
                    <input className='form-control' type="date" placeholder='birthday' />
                    <input className='form-control' type="text" placeholder='address' />
                    <button className='btn btn-light'>Publish it!</button>
                </form>
            </div>
        </div>
    )
}