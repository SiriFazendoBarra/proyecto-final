import { createContext, useContext, useState } from "react";

import { useLoginContext } from "./LoginContext";

const FavoritesContext = createContext()

export default function FavoritesProvider({ children }) {

    const [favorites, setFavorites] = useState([])
    const { logged, user } = useLoginContext()

    const handleFavorites = (id) => {

        if (logged) {
            if (favorites.some(item => item == id)) setFavorites(favorites.filter(item => item != id))
            else setFavorites([...favorites, id])
        }

    }
    return (

        <FavoritesContext.Provider value={{ favorites, setFavorites, handleFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext)