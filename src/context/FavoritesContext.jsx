import { createContext, useContext, useState } from "react";
import { useLoginContext } from "./LoginContext";

const FavoritesContext = createContext()

export default function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState([])
    const { logged } = useLoginContext()


    const addFavorites = (item) => {

        if (logged == true) {
            setFavorites([...favorites, item])
        }

    }

    return (

        <FavoritesContext.Provider value={{ favorites, setFavorites, addFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext)