import { createContext, useContext, useEffect, useState } from "react";
import { useLoginContext } from "./LoginContext";

const FavoritesContext = createContext()
// const initialStateFavorites = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [] ///Ojo ACA

export default function FavoritesProvider({ children }) {

    // if (favorites.some(item => item == itemId)) setFavorites(favorites.filter(item => item != itemid))
    // else setFavorites([...favorites, itemId])

    const { user, logged } = useLoginContext()
    const [favorites, setFavorites] = useState([])

    // useEffect(() => {
    //     localStorage.setItem("favorites", JSON.stringify(favorites))
    // }, [favorites])

    useEffect(() => {
        if (logged) {
            user.favorites ? setFavorites([...user.favorites]) : null
        }
    }, [logged])

    const addFavorites = (item) => {

        if (logged == true) {

            favorites ? setFavorites([...favorites, item]) : null
        }
        console.log(favorites)
    }

    return (

        <FavoritesContext.Provider value={{ favorites, setFavorites, addFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoritesContext = () => useContext(FavoritesContext)