import { useDataContext } from "../context/DataContext"
import { useParams } from "react-router-dom"

import Cards from "../components/Cards"

export default function Home() {

    const { market } = useDataContext()
    const params = useParams()
        
    return (
        <div className="page">
            <div className="container py-5">
                <section>
                    <h1 className="mb-5">Welcome to Player 2</h1>
                </section>
                <section className="marketSection">
                    {
                        market.map((item) => {
                            return (
                                <Cards key={item.id} item={item} params={params} />
                            )
                        })
                    }
                </section>




            </div>

        </div>
    )
}