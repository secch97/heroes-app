import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types';


const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {}, init);
    console.log(state);
    const handleLogin = async (name = "") =>{
        const action = {
            type: types.login,
            payload: {
                id: "ABC",
                name: name
            }
        }
        localStorage.setItem("user", JSON.stringify({id: "ABC", name:name}))
        dispatch(action);
        
    }

    const handleLogout = async () => {
        localStorage.removeItem("user");
        const action = {
            type: types.logout,
            payload: {
                id: undefined,
                name: undefined
            }
        }
        dispatch(action);
    }


    return (
    <AuthContext.Provider value={{
        ...state,
        handleLogin: handleLogin,
        handleLogout: handleLogout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
