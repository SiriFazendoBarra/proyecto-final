import { createContext, useContext, useState } from "react";
import { useLoginContext } from "./LoginContext";

const FavoritesContext = createContext()

export default function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState([])
    const { login } = useLoginContext()

    const addFavorites = (item) => {
        if (login == true) {
            setFavorites(...favorites, item)

        }
    }

    return (

        <FavoritesContext.Provider value={{ favorites, setFavorites, addFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext)