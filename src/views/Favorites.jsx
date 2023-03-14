import { useFavoritesContext } from "../context/FavoritesContext"
import Cards from "../components/Cards"

export default function Favorites() {

    const { favorites } = useFavoritesContext()


    return (
        <div className="page">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex justify-content-between flex-column mb-5">
                    <h2>Your Favorites</h2>
                    {favorites ? <h3>Gotta catch for moar!</h3> : <h3>Ups! it seems very very empty right here</h3>}

                </section>
                <section className="marketSection">
                    {
                        !favorites ?  null :
                            favorites.map((item) => {
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