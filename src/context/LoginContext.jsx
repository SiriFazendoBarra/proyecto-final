import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const LoginContext = createContext()

export default function LoginProvider({ children }) {

    const navigate = useNavigate()
    const [logged, setLogged] = useState(null)
    const [user, setUser] = useState(null)

    const getUser = async (email, password) => {
        const res = await fetch("../users.json")
        const data = await res.json()
        const users = data.users
        for (const item of users) {
            
            if (item.email == email) {
                if (item.password == password)
                    setLogged(true)
                    setUser(item)
            }
        }
        return logged ? navigate("/home") : null 
    }

    useEffect(() => {
        getUser()
    }, [])



    return (
        <LoginContext.Provider value={{ logged, setLogged, getUser, user }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)