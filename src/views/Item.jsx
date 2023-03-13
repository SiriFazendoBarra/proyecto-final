import { useDataContext } from "../context/DataContext"
import { useNavigate, useParams } from "react-router-dom"

export default function Item() {

    const { market } = useDataContext()
    const params = useParams()
    const index = market.findIndex((i) => i.id == params.id)
    const item = market[index]

    return (
        <div className="page">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex justify-content-between mb-5">
                    <h2>Check this one!</h2>

                </section>

                <div className="d-flex flex-wrap">
                    <img className="img-fluid imgItem" src={item.img} alt="" />
                    <div className="d-flex flex-column justify-content-between ms-3">
                        <div>
                            <h3>{item.title}</h3>
                            <p className="">{item.desc}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="h3">{item.price}</p>
                            <button className="btn btn-light">Add to cart</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}