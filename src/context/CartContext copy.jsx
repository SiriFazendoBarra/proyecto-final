import { createContext, useContext, useEffect, useState } from "react";

import { useDataContext } from "./DataContext";

const CartContext = createContext()

export default function CartProvider({ children }) {


    const { market } = useDataContext()
    const [cart, setCart] = useState([])
    const [buttonState, setButtonState] = useState(1)
    let [sum, setSum] = useState(0)
    // let suma = sum

    const handleCart = (id) => {
        let suma = 0
        if (buttonState == "1") {
            cart[cart.findIndex(ele => ele.id == id)].quantity++
        }
        else {
            cart[cart.findIndex(ele => ele.id == id)].quantity--
        }
        console.log(cart)
        for (const item of cart) {

            suma += parseInt(market[market.findIndex(ele => ele.id == id)].price) * item.quantity
            console.log(suma, sum, market[market.findIndex(ele => ele.id == id)].price, item.quantity)
            setSum(sum + suma)
        }


    }

    useEffect(() => {

        if (!cart) handleCart()

    }, [sum])


    const addCart = (id) => {
        if (!cart.some((item) => item.id == id)) {
            setCart([
                ...cart,
                {
                    id: id,
                    quantity: 1,
                }
            ])
        } else {
            cart[cart.findIndex((item) => item.id == id)].quantity++
        }

        // console.log(cart)

        // !cart ?
        //     setCart([{
        //         id: id,
        //         img: item.img,
        //         title: item.title,
        //         desc: item.desc,
        //         price: item.price,
        //         quantity: 1
        //     }])
        //     :
        //     setCart([...cart, {
        //         id: id,
        //         img: item.img,
        //         title: item.title,
        //         desc: item.desc,
        //         price: item.price,
        //         quantity: 1
        //     }])
        // console.log(cart)
    }

    // const removeCart = (id) => {
    //     console.log(id)
    //     cart[cart.findIndex((item) => item.id == id)].quantity > 1 ?
    //         cart[cart.findIndex((item) => item.id == id)].quantity--
    //         :
    //         null
    // }




    return (

        <CartContext.Provider value={{ cart, addCart, setButtonState, buttonState, handleCart, sum }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)