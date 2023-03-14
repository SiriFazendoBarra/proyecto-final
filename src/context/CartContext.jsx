import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(null)

    const addCart = (item) => {

        !cart ?
            setCart([{
                id: item.id,
                img: item.img,
                title: item.title,
                desc: item.desc,
                price: item.price,
                quantity: 1
            }])
            :
            setCart([...cart, {
                id: item.id,
                img: item.img,
                title: item.title,
                desc: item.desc,
                price: item.price,
                quantity: 1
            }])
    }

    return (

        <CartContext.Provider value={{ cart, addCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)