import React, { createContext, useState, useEffect } from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [amountToConvert, setAmountToConvert] = useState(0)
    const [baseFrom, setBaseFrom] = useState('NGN')
    const [rateTo, setRateTo] = useState('USD')

    return (
        <AppContext.Provider
            value={{ amountToConvert, setAmountToConvert, baseFrom, setBaseFrom, rateTo, setRateTo }}
        >
            {children}
        </AppContext.Provider>
    )
}



export default AppContextProvider