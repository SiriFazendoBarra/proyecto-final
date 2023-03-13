import { createContext, useContext, useState } from "react";

const LoginContext = createContext()

export default function LoginProvider ({children}){

    const [login, setLogin] = useState(false)
    


    return(
        <LoginContext.Provider value={{setLogin, login}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => useContext(LoginContext)