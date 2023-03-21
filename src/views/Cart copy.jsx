import { useEffect, useState } from "react"
import { useCartContext } from "../context/CartContext"
import { useDataContext } from "../context/DataContext"

export default function Cart() {

    const { cart, addCart, removeCart, setButtonState, handleCart, sum, buttonState } = useCartContext()
    const { market } = useDataContext()

    const handleAddClick = (id) => {
        console.log(id)
        setButtonState('1')
        handleCart(id)
    }

    const handleRemoveClick = (id) => {
        console.log(id)
        setButtonState("2")
        handleCart(id)
    }




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
                        <p className="col-2"></p>

                    </li>

                    <ul className="p-0 ">

                        {
                            !cart ? null :
                                cart.map((item) => {

                                    const temp = market.findIndex(ele => ele.id == item.id)
                                    return (
                                        <li key={item.id} className="list-group-item cart-list-item d-flex align-items-center gap-3 mb-3 justify-content-between">
                                            <img className="img-fluid col-3 rounded" src={market[temp].img} alt="" />
                                            <p className="col-2">{market[temp].title}</p>
                                            <p className="col-4">{market[temp].desc}</p>
                                            <p className="col-1 h4 text-center">$ {market[temp].price}</p>
                                            <div className="col-2 d-flex justify-content-evenly">
                                                <div className="d-flex justify-content-between gap-3 text-center">
                                                    {/* <p role="button" className="col-3" onClick={() => removeCart(item.id)}>➖</p>
                                                    <p className="col-">{item.quantity}</p>
                                                    <p role="button" className="col-3" onClick={() => addCart(item.id)}>➕</p> */}

                                                    <p role="button" className="col-3" onClick={() => handleRemoveClick(item.id)}>➖</p>
                                                    <p className="col-">{item.quantity}</p>
                                                    <p role="button" className="col-3" onClick={() => handleAddClick(item.id)}>➕</p>
                                                </div>

                                            </div>{/* <p role="button">❌</p> */}
                                        </li>
                                    )
                                })
                        }

                    </ul>
                    {
                        !cart ? null :
                            <li className="list-group-item cart-list-item d-flex align-items-center gap-3 mb-3 justify-content-between text-center">
                                <p className="img-fluid tr-img col-3"></p>
                                <p className="col-2 text-start text-white">{buttonState}</p>
                                <p className="col-4 text-end h4" >Total</p>
                                <p className="col-1 h4 ">$ {sum}</p>
                                <button className="btn btn-success col-2">Go to pay</button>

                            </li>
                    }


                </section>




            </div>

        </div>
    )
}