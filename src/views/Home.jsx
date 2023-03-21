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
            <div className="d-flex flex-wrap container py-5 gap-4">
                <section className="col-12">
                    <h1 className="text-center">Welcome to Player 2 <span className="animation-zoom">{user.name}</span> !</h1>
                </section>
                <section className="col-12 my-3 d-flex justify-content-end">
                    <div className="col-6 col-md-2">
                        <select className="form-select  " name="" id="">
                            <option value="">Default</option>
                            <option value="">Title [a-z]</option>
                            <option value="">Title [z-a]</option>
                            <option value="">Price $▲ </option>
                            <option value="">Price $▼ </option>
                        </select>
                    </div>
                </section>

                <section className="marketSection col-12">
                    {

                        !market.length > 0 ? null
                            :
                            market.filter((item) => item.title.toLowerCase().includes(searchBar)).filter((item) => item.category.includes(categories))
                                .map((item) => {
                                    return (
                                        <Cards key={item.id} item={item} params={params} />
                                    )
                                })

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