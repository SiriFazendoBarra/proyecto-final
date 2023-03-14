import { useCartContext } from "../context/CartContext"

import Cards from "../components/Cards"


export default function Cart() {

    const { cart } = useCartContext()
    return (
        <div className="page">
            <div className="container py-5">
                <section className="d-flex justify-content-between mb-5">
                    <h2>Check your Cart!</h2>
                </section>
                <section className="m-auto d-flex flex-column ">

                    <li className="list-group-item cart-list-item d-flex align-items-center gap-3 justify-content-between text-center h5 ">
                        <p className="img-fluid tr-img col-3"></p>
                        <p className="col-2 text-start">Item</p>
                        <p className="col-4 text-start">Description</p>
                        <p className="col-1 ">price</p>
                        <p className="col-2">Quantity</p>

                    </li>

                    <ul className="p-0 ">

                        {
                            !cart ? null :
                                cart.map((item) => {
                                    return (
                                        <li key={item.id} className="list-group-item cart-list-item d-flex align-items-center gap-3 mb-3 justify-content-between">
                                            <img className="img-fluid col-3" src={item.img} alt="" />
                                            <p className="col-2">{item.title}</p>
                                            <p className="col-4">{item.desc}</p>
                                            <p className="col-1 h4 text-center">${item.price}</p>
                                            <div className="col-2 d-flex justify-content-evenly">
                                                <div className="d-flex justify-content-between gap-3 text-center">
                                                    <p role="button" className="col-3">➖</p>
                                                    <p className="col-">1</p>
                                                    <p role="button" className="col-3">➕</p>
                                                </div>
                                                <p role="button">❌</p>
                                            </div>
                                        </li>
                                    )
                                })
                        }

                    </ul>
                    {
                        !cart ? null :
                            <li className="list-group-item cart-list-item d-flex align-items-center gap-3 mb-3 justify-content-between text-center">
                                <p className="img-fluid tr-img col-3"></p>
                                <p className="col-2 text-start"></p>
                                <p className="col-4 text-end h4" >Total</p>
                                <p className="col-1 h4 ">$99</p>
                                <button className="btn btn-success col-2">Go to pay</button>

                            </li>
                    }


                </section>




            </div>

        </div>
    )
}