import React, { useState, ChangeEvent } from "react"

type validator = (value: string) => boolean
type result = {
  value: string
  onChange?: (event: ChangeEvent) => void
}

export const useInput: result = (initialVal: string, validation: validator) => {
  const [value, setValue] = useState(initialVal)

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.target
    console.log(`*** useInput.onChange... value=${value}`)
    let update = true
    if (typeof validation === "function") {
      update = validation(value)
    }
    if (update) {
      setValue(value)
    }
  }

  return { value, onChange }
}
