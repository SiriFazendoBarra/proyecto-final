import { useDataContext } from "../context/DataContext"

import Cards from "../components/Cards"

export default function Cart() {

    const { market } = useDataContext()
    return (
        <div className="page">
            <div className="container py-5">
                <section className="d-flex justify-content-between mb-5">
                    <h2>Cart</h2>
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