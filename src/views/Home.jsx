import { useDataContext } from "../context/DataContext"

import Cards from "../components/Cards"

export default function Home() {

    const { market } = useDataContext()
    console.log(market)

    return (
        <div className="page">
            <div className="container py-5">
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