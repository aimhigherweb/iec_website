import React, { useState } from 'react'
import { useAppState } from '../state'

const SearchBox = () => {
  const { setSearchKey, setSearchOpen } = useAppState()
  const [input, setInput] = useState('')

  const handleChange = async e => {
    setInput(e.target.value)
    if (e.key === 'Enter') {
      setSearchKey(e.target.value)
      setSearchOpen(true)
    }
  }

  const handleSubmit = async () => {
    console.log('Submitting')
    setSearchKey(input)
    setSearchOpen(true)
  }

  return (
    <div className="search-box" style={{}}>
      <input
        className="search-input"
        style={{
          border: '0',
          marginLeft: '10px',
          display: 'inline-block',
          padding: '5px 5px',
          fontSize: '15px',
          borderRadius: '0'
        }}
        value={input}
        onChange={handleChange}
        onKeyPress={e => handleChange(e)}
      />
      <input
        type="button"
        className="search-button"
        style={{
          background: '#3273f0',
          border: '0',
          marginLeft: '10px',
          color: 'white',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          display: 'inline-block',
          padding: '5px 15px',
          fontSize: '15px',
          borderRadius: '0'
        }}
        value="SEARCH"
        onClick={handleSubmit}
      />
    </div>
  )
}

export default SearchBox
