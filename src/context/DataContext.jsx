import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext()

export default function DataProvider({ children }) {

    const [market, setMarket] = useState(null)

    const getData = async () => {
        const res = await fetch("../market.json")
        const data = await res.json()
        setMarket(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    if (!market) return <h1>loading...</h1>

    return (
        <DataContext.Provider value={{ market }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)