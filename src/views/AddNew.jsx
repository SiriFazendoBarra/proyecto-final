import { useState } from "react"

export default function AddNew() {

    const [newPublication, setNewPublication] = useState([])

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [img, setImg] = useState(null)

    const handleAddNew = (e) => {
        e.preventDefault()
    }

    console.log(title, price, description, img)

    return (
        <div className="page">
            <div className="container d-flex flex-column align-items-center py-5">
                <h2>Add something new!</h2>
                <form className="d-flex flex-wrap align-items-center gap-2 my-4 formLogin" onSubmit={() => handleAddNew()} action="">
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="col-6">
                            {img && <img className="img-fluid" src={img} />}
                        </div>
                        <div className="col-6">
                            <input className='form-control' type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
                            <input className='form-control' type="text" placeholder='price' onChange={(e) => setPrice(e.target.value)} />
                            <textarea className='form-control' type="text" rows="6" placeholder='description' onChange={(e) => setDescription(e.target.value)} />
                            <input className='form-control' type="file" placeholder='picture' onChange={(e) => setImg(`/${e.target.files[0].name}`)} />
                        </div>

                    </div>
                    <button className='col-3 btn btn-light' type="submit" >Publish it!</button>
                </form>
            </div>
        </div>
    )
}