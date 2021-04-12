import { useState, useEffect } from "react"
import { window } from "browser-monads"

export const useMatchScroll: number = () => {
  const [offset, setOffset] = useState(window.pageYOffset)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return offset
}
