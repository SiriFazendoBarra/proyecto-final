import { useDataContext } from "../context/DataContext"
import { useParams } from "react-router-dom"

import Cards from "../components/Cards"
import { useLoginContext } from "../context/LoginContext"
import { useSearchContext } from "../context/SearchContext"

export default function Home() {
    const { searchBar, categories } = useSearchContext()
    const { market } = useDataContext()
    const { user } = useLoginContext()
    const params = useParams()

    return (
        <div className="page">
            <div className="container py-5">
                <section>
                    <h1 className="mb-5 text-center">Welcome to Player 2 <span className="animation-zoom">{user.name}</span> !</h1>
                </section>

                <section className="marketSection">
                    {

                        market.length > 0 ?

                            market.filter((item) => item.title.toLowerCase().includes(searchBar)).filter((item) => item.category.includes(categories))
                                .map((item) => {
                                    return (
                                        <Cards key={item.id} item={item} params={params} />
                                    )
                                })
                            : null
                    }
                </section>





                {/* <section className="marketSection">
                    {
                        market.map((item) => {
                            return (
                                <Cards key={item.id} item={item} params={params} />
                            )
                        })
                    }
                </section> */}




            </div>

        </div>
    )
}