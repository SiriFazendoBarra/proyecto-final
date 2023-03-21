import { createContext, useContext, useState } from "react";
import { useLoginContext } from "./LoginContext";

const PublicationsContext = createContext()

export default function PublicationsProvider({ children }) {


    const { user, logged } = useLoginContext()
    const [publications, setPublications] = useState([])

    const addPublication = (item) => {

        if (logged == true) {
            user.publications ? setPublications(user.publications) : null
            publications ? setPublications([...publications, item]) : null
        }
        console.log(publications)
    }

    return (

        <PublicationsContext.Provider value={{ publications, setPublications, addPublication }}>
            {children}
        </PublicationsContext.Provider>
    )
}

export const usePublicationsContext = () => useContext(PublicationsContext)