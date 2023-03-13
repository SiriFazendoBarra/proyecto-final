import { useDataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"

import Cards from "../components/Cards"

export default function UserPublications() {

    const { market } = useDataContext()
    const navigate = useNavigate()
    
    return (
        <div className="page">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex justify-content-between mb-5">
                    {market ? <h2>What do you want to sell?</h2> : <h2>Ups! it seems very very empty right here</h2> }
                    <button className="btn btn-success" onClick={() => navigate("/addNew")}>Add new</button>
                </section>
                <section className="marketSection">
                    {
                        market.map((item) => {
                            return (
                                <Cards key={item.id} item={item} />
                            )
                        })
                    }
                </section>




            </div>

        </div>
    )
}