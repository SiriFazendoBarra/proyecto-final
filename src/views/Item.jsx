import { useDataContext } from "../context/DataContext"
import { useNavigate, useParams } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useFavoritesContext } from "../context/FavoritesContext"

export default function Item() {

    const { cart, handleCart } = useCartContext()
    const { market } = useDataContext()
    const { favorites, handleFavorites } = useFavoritesContext()
    const params = useParams()
    const index = market.findIndex((i) => i.id == params.id)
    const item = market[index]

    return (
        <div className="page">
            <div className="container py-5 d-flex flex-column">
                <section className="d-flex justify-content-between mb-5">
                    <h2>Check this one!</h2>

                </section>

                <div className="itemCard rounded">
                    <div className="p-2 rounded">
                        <img className="img-fluid img-item rounded" src={item.img} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-between p-2">

                        <div>
                            <p className="h3 mb-4">{item.title}</p>
                            <p className="text-align-justify">{item.desc}</p>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">

                            {
                                !favorites.some((ele) => ele == item.id) ?
                                    <FaRegHeart className='h2 m-0 z-2 animation-zoom' role="button" onClick={() => handleFavorites(item.id)} />
                                    :
                                    <FaHeart className='h2 m-0 z-2 animation-zoom' role="button" onClick={() => handleFavorites(item.id)} />
                            }
                            <p className="h3 m-0">${item.price}</p>
                            <button className={!cart.some(ele => ele.id == item.id) ? "btn btn-success" : "btn btn-disable"} disabled={!cart.some(ele => ele.id == item.id) ? false : true} onClick={() => handleCart(item.id)}>Add to Cart</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}