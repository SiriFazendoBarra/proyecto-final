import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { useDataContext } from "../context/DataContext"

export default function Cart() {

    const { cart, setCart, removeCart, setButtonState, handleCart, cartTotal, buttonState } = useCartContext()
    const { market } = useDataContext()

    const handleAddClick = (id) => {
        console.log(id)
        setButtonState(true)
        handleCart(id)
    }

    const handleRemoveClick = (id) => {
        console.log(id)
        setButtonState(false)
        handleCart(id)
    }
    const handleDeleteButton = (id) => {
        if (cart.some(ele => ele.id == id)) {
            setCart(cart.filter(ele => ele.id != id))
        }
    }



    return (
        <div className="page">
            <div className="container py-5">
                <section className="d-flex justify-content-between mb-5">
                    <h2>Check your Cart!</h2>
                </section>
                <section className="m-auto d-flex flex-column ">

                    {/* <li className="list-group-item cart-list-item d-flex align-items-center gap-3 justify-content-between text-center h5 ">
                        <p className="img-fluid tr-img col-3"></p>
                        <p className="col-2 text-start">Item</p>
                        <p className="col-4 text-start">Description</p>
                        <p className="col-1 ">price</p>
                        <p className="col-2">Quantity</p>
                        <p className="col-2"></p>

                    </li> */}

                    <div className="p-0 ">

                        {
                            !cart ? null :
                                cart.map((item) => {

                                    const temp = market.findIndex(ele => ele.id == item.id)
                                    return (
                                        <div key={item.id} className="cart-list-item d-flex align-items-center mb-3 justify-content-between flex-wrap text-md-center">

                                            <img className="img-fluid col-12 col-md-1 rounded" src={market[temp].img} alt="" />
                                            <div className="d-flex col-12 col-md-1 p-1">
                                                <span className="col-4 d-md-none">ID : </span>
                                                <span className="col-7">{market[temp].id.toUpperCase()}</span>
                                            </div>
                                            <div className="d-flex col-12 col-md-5 text-md-start p-1">
                                                <span className="col-4 d-md-none">Title:  </span>
                                                <span className="col-7">{market[temp].title}</span>

                                            </div>
                                            <div className="col-4 col-md-1 md-h5 p-1">
                                                <span className="d-md-none">Price:  </span>
                                                <span className="col-7">$ {market[temp].price}</span>

                                            </div>
                                            <div className="col-5 col-md-1 p-1">
                                                <span className="d-md-none">Sub total:  </span>
                                                <span>$ {market[temp].price * item.quantity} </span>

                                            </div>
                                            <div className="col-2 col-md-1 d-flex justify-content-evenly p-1">
                                                <span role="button" className="" onClick={() => handleRemoveClick(item.id)}>➖</span>
                                                <span className="">{item.quantity}</span>
                                                <span role="button" className="" onClick={() => handleAddClick(item.id)}>➕</span>
                                            </div>
                                            <span role="button" className="col-1 col-md-1 p-1" onClick={() => handleDeleteButton(item.id)}>❌</span>
                                        </div>
                                    )
                                })
                        }

                    </div>
                    {
                        !cart ? null :
                            <div className="d-flex align-items-center mb-3 justify-content-between flex-wrap text-center">

                                <img className="img-fluid col-12 col-md-1 rounded" alt="" />
                                <p className="col-3 col-md-1"></p>
                                <p className="col-3 col-md-1 text-start"></p>
                                <p className="col-3 col-md-1"></p>
                                <p className="col-12 col-sm-6 col-md-2 h5 text-sm-start text-md-end">Total: $ {cartTotal}</p>
                                <button className="btn btn-success col-12 col-sm-6 col-md-2 d-flex justify-content-evenly">
                                    Go to pay!
                                </button>

                            </div>
                    }


                </section>




            </div >

        </div >
    )
}