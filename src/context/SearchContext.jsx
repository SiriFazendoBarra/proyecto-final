import { createContext, useContext, useState } from "react";

const SearchContext = createContext()

export default function SearchProvider({ children }) {

    const [searchBar, setSearchBar] = useState("")
    const [categories, setCategories] = useState("")

    return (
        <SearchContext.Provider value={{ searchBar, setSearchBar, categories, setCategories }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext)