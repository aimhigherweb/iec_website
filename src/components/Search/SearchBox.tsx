import React, { useEffect, useRef, useLayoutEffect } from "react"
import styled from "styled-components"

import { useInput } from "../../hooks/useInput"

const SearchInput = styled.input`
  padding: 4px 6px;
  color: #5e5e5e;
  font-size: 1.1em;
  font-weight: 400;
  outline: none;
  background: lightyellow;
  ::placeholder {
    font-size: 0.9em;
    color: #5e5e5e;
  }
  :focus {
    outline: none;
  }
`

export const SearchBox: React.FC = ({ searchCallback }) => {
  const { value, onChange } = useInput("")
  const searchInputRef = useRef(null)

  useEffect(() => {
    searchCallback(value)
  }, [value])

  useLayoutEffect(() => {
    searchInputRef && searchInputRef.current.focus()
  }, [])

  return (
    <SearchInput
      id="search-input"
      placeholder="Search Knowledge Base"
      value={value}
      onChange={onChange}
      ref={searchInputRef}
    />
  )
}
