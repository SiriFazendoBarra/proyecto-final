import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const LoginContext = createContext()

export default function LoginProvider({ children }) {

    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState({})

    const getUser = async () => {
        const res = await fetch("../users.json")
        const data = await res.json()
        const users = data.users
        for (const item of users) {
            
            if (item.email == email) {
                if (item.password == password){
                    setLogged(true)
                    setUser(item)
                    console.log(user)
                }
                    
                return logged ? navigate("/home") : null   

            }
        }
        
         
    }

    useEffect(() => {
        getUser()
    }, [])



    return (
        <LoginContext.Provider value={{ logged, setLogged, getUser, user, email, setEmail, password, setPassword }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)