import { useState, useEffect } from "react"
import { window } from "browser-monads"

export const useMatchMedia: boolean = ({ width }) => {
  const [isMatched, setMatched] = useState(
    window.matchMedia(`(max-width: ${width}px)`).matches
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${width}px)`)
    const handleToggle = () => {
      setMatched(mq.matches)
    }
    mq.addListener(handleToggle)
    return () => mq.removeListener(handleToggle)
  }, [width])

  return isMatched
}

export const matchMediaNow: boolean = ({ width }) => {
  return window.matchMedia(`(max-width: ${width}px)`).matches
}
