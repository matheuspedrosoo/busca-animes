import React from 'react'
import './Busca.css'

const Busca = ({ value, onChange }) => {
  function handleChange(event) {
    onChange(event.target.value)
  }

  return (
    <>
      <div className="container-busca">
        <input
          className="input-busca"
          type="search"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div></div>
    </>
  )
}
export default Busca
