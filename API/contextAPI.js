import React, { useState, createContext, useEffect } from "react";
import axios from "axios"

export const AppContext = createContext();

const Context = ({children}) => {
    
    const[darkMode, setdarkMode] = useState(true)
    const[phoneNumber, setphoneNumber] = useState(null)

    return (
        <AppContext.Provider value={{darkMode, setdarkMode, phoneNumber, setphoneNumber}}>
            {children}
        </AppContext.Provider>
    )
}

export default Context