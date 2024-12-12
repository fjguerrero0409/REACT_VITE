import { createContext, PropsWithChildren, useContext, useState } from "react";

enum StateTest {
    'cheking',
    'login',
    'closed',
    'authenticated'
}

interface AuthState {
    state: StateTest
    loginEmailWithPassword: (email: string, password: string) => void
    logOut: () => void
}

export const AuthContext = createContext({} as AuthState)

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [state, setState] = useState(StateTest.cheking)

    const loginEmailWithPassword = (email: string, password: string) => {
        setState(StateTest.login)
    }

    const logOut = () => {
        setState(StateTest.closed)
    }

    return (<AuthContext.Provider value={{
        state: state,
        loginEmailWithPassword,
        logOut
    }}>
        {children}
    </AuthContext.Provider>)
}   