import { useDataContext } from "../context/DataContext"
import { useNavigate, useParams } from "react-router-dom"

export default function Item() {

    const { market } = useDataContext()
    const params = useParams()

    console.log(params.id, market)
    const index = market.findIndex((i) => i.id == params.id)
    const item = market[index]
    console.log(item)


    return (
        <div className="page">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex justify-content-between mb-5">
                    <h2>Item</h2>
                </section>
                <h3>{item.title}</h3>
            </div>
        </div>
    )
}