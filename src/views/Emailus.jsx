

export default function Emailus() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="page">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2>Email us!</h2>
                <h3>What can we do for you?</h3>
                <form className="d-flex flex-column align-items-center gap-2 my-4 formLogin" action="" onSubmit={() => handleSubmit()} >
                    <input className='form-control' type="text" placeholder='your@email.com' />

                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">

                        <option value="1">Choose an option</option>
                        <option value="1">Need to report a problem</option>
                        <option value="3">General questions</option>
                        <option value="3">Shipping info</option>
                        <option value="3">Billing</option>
                        <option value="2">Congratulations</option>
                    </select>

                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write here..."></textarea>

                    <button className='btn btn-light' type="submit" >Login</button>
                </form>

            </div>

        </div >
    )
}