import React, { useState } from 'react'
import useDebounce from '../utils/useDebounce'
import './Busca.css'

const Busca = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value)
  const deboucedChange = useDebounce(onChange, 500)

  function handleChange(event) {
    setDisplayValue(event.target.value)
    deboucedChange(event.target.value)
  }

  return (
    <>
      <div className="container-busca">
        <input
          className="input-busca"
          type="search"
          value={displayValue}
          onChange={handleChange}
        />
      </div>
      <div></div>
    </>
  )
}
export default Busca
