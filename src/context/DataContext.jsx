import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext()

export default function DataProvider({ children }) {

    const [market, setMarket] = useState([])

    const getData = async () => {
        const res = await fetch("../market.json")
        const data = await res.json()
        setMarket(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <DataContext.Provider value={{ market }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)