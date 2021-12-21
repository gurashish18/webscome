import React, { useState, createContext, useEffect } from "react";
import axios from "axios"

export const AppContext = createContext();

const Context = ({children}) => {
    
    const[darkMode, setdarkMode] = useState(true)

    return (
        <AppContext.Provider value={{darkMode, setdarkMode}}>
            {children}
        </AppContext.Provider>
    )
}

export default Context