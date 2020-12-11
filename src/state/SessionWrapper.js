import React, { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const SessionWrapper = ({ children }) => {
  const [current, setCurrent] = useState({
    index: 99,
    articles: ["aaa", "bbb", "ccc"],
    showSearch: false,
    searchText: "",
  })

  return (
    <>
      <AppContext.Provider
        value={{
          current: current,
          setCurrent: setCurrent,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  )
}

export const useSession = () => useContext(AppContext)
