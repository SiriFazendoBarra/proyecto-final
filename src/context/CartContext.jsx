import { createContext, useContext, useEffect, useState } from "react";

import { useDataContext } from "./DataContext";

const CartContext = createContext()

export default function CartProvider({ children }) {


    const { market } = useDataContext()
    const [cart, setCart] = useState([])
    const [buttonState, setButtonState] = useState(0)
    let [cartTotal, setCartTotal] = useState(0)
    let [cartAmount, setCartAmount] = useState(0)


    const handleCart = (id) => {

        if (cart.some(ele => ele.id == id)) {
            if (buttonState) {
                cart[cart.findIndex(ele => ele.id == id)].quantity++
            } else {
                cart[cart.findIndex(ele => ele.id == id)].quantity--
            }

            setCart(cart)
        } else {
            setCart([...cart,
            {
                id: id,
                quantity: 1
            }
            ])
        }
        let a = 0
        let sum = 0
        for (const index of cart) {
            a += index.quantity
            sum += index.quantity * market[market.findIndex(ele => ele.id == id)].price
            setCartAmount(a)
            setCartTotal(sum)
        }
    }

    useEffect(() => {
        let a = 0
        let sum = 0
        for (const index of cart) {
            a += index.quantity
            sum += index.quantity * market[market.findIndex(ele => ele.id == index.id)].price
            setCartAmount(a)
            setCartTotal(sum)
        }
    }, [cart])

    return (

        <CartContext.Provider value={{ cart, setCart, setButtonState, buttonState, handleCart, cartAmount, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)