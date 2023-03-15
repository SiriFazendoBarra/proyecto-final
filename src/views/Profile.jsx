import { useState } from "react"
import { useLoginContext } from "../context/LoginContext"

export default function UserProfile() {

    const { user } = useLoginContext()

    const [edit, setEdit] = useState(false)

    const handleEditProfile = (e) => {
        e.preventDefault()
        edit ? setEdit(false) : setEdit(true)
    }

    return (
        <div className="page">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2>Hey {user.name}</h2>
                <h3>What will we see today?</h3>
                <form className="d-flex flex-wrap login-form justify-content-end" action="" onSubmit={handleEditProfile}>
                    <div className="col-12 col-md-6 p-2">
                        <p>Email</p>
                        {!edit ?
                            <input className='form-control' readOnly type="email" placeholder='your@email.com' defaultValue={user.email} /> :
                            <input className='form-control' type="email" placeholder='your@email.com' defaultValue={user.email} />}
                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <p>Username</p>
                        {!edit ?
                            <input className='form-control' readOnly type="text" placeholder='username' /> :
                            <input className='form-control' type="text" placeholder='username' />}

                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <p>Name</p>
                        {!edit ?
                            <input className='form-control' readOnly type="text" placeholder='name' /> :
                            <input className='form-control' type="text" placeholder='name' />}
                    </div>

                    <div className="col-12 col-md-6 p-2">
                        <p>Birthday</p>
                        {!edit ?
                            <input className='form-control' readOnly type="date" placeholder='birthday' /> :
                            <input className='form-control' type="date" placeholder='birthday' />}
                    </div>
                    <div className="col-12 col-md-12 p-2">
                        <p>Adress</p>
                        {!edit ?
                            <input className='form-control' type="text" readOnly placeholder='address' /> :
                            <input className='form-control' type="text" placeholder='address' />}
                    </div>
                    <div className="col-12 col-md-6 p-2 d-flex justify-content-between gap-2 flex-wrap align-items-center">

                        {!edit ?
                            <p className="m-0 col-4 text-center">Modify your account</p> :
                            <p className="m-0 col-4 text-center">Save changes</p>}

                        {!edit ?
                            <button className='btn btn-warning col-6' type="submit">Edit info</button> :
                            <button className='btn btn-success col-6' typeof="submit" >Save</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}