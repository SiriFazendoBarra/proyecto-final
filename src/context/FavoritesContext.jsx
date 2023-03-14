import { createContext, useContext, useState } from "react";
import { useLoginContext } from "./LoginContext";

const FavoritesContext = createContext()

export default function FavoritesProvider({ children }) {

    
    const { user, logged } = useLoginContext()
    const [favorites, setFavorites] = useState(null)

    const addFavorites = (item) => {
        
        if (logged == true) {
            user.favorites ? setFavorites(user.favorites) : null
            favorites ? setFavorites([...favorites, item] ) : null           
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