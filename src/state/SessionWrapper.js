import React, { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const SessionWrapper = ({ children }) => {
  const [current, setCurrent] = useState({
    index: 99,
    articles: ["aaa", "bbb", "ccc"],
    showSearch: false,
    searchText: "",
    showBooking: false,
    bookingId: "",
    whatWeDoCatId: "",
  })

  const showAll = () => {
    return !current.showSearch && !current.showBooking
  }

  const searchToggle = (on) => {
    console.log(`### SessionWrapper.searchToggle... showSearch=${on}`)
    setCurrent({
      ...current,
      showSearch: on,
      searchText: on ? current.searchText : "",
      showBooking: false,
      bookingId: "",
    })
  }

  const bookingToggle = (on, bookingId) => {
    console.log(
      `### SessionWrapper.bookingToggle... showBooking=${on} id=${bookingId}`
    )
    setCurrent({
      ...current,
      showBooking: on,
      bookingId: bookingId,
      showSearch: false,
      searchText: "",
    })
  }

  const whatWeDoCatToggle = (catId) => {
    console.log(`### SessionWrapper.whatWeDoCatToggle... catId=${catId}`)
    setCurrent({
      ...current,
      whatWeDoCatId: catId,
    })
  }

  return (
    <>
      <AppContext.Provider
        value={{
          current: current,
          setCurrent: setCurrent,
          showAll: showAll,
          searchToggle: searchToggle,
          bookingToggle: bookingToggle,
          whatWeDoCatToggle: whatWeDoCatToggle,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  )
}

export const useSession = () => useContext(AppContext)
