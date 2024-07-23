import React, { createContext, useState, useContext, ReactNode } from 'react'

interface MainContextType {
  theme: string
  setTheme: (theme: string) => void
}

const MainContext = createContext<MainContextType>({
  theme: "light",
  setTheme: () => { },
})


const MainProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light")
  return (
    <MainContext.Provider value={{ theme, setTheme }}>
      {children}
    </MainContext.Provider>
  )
}

const useTheme = () => useContext(MainContext)

export { MainProvider, useTheme }
