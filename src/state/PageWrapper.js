import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const Provider = ({ children }) => {
  const [isSearchOpen, setSearchOpen] = useState(false)
  const [searchKey, setSearchKey] = useState('')

  return (
    <AppContext.Provider
      value={{
        isSearchOpen: isSearchOpen,
        setSearchOpen: setSearchOpen,
        searchKey: searchKey,
        setSearchKey: setSearchKey
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const PageWrapper = ({ element }) => <Provider>{element}</Provider>

export const useAppState = () => useContext(AppContext)
