import React, { useState }  from 'react'

export const Insurance = ({value, onChange}) => {

  const handleChange = () => {
    onChange(!value)
}
  return (
    <div className='insurance-block'>
      <h1>Страхование</h1>
      <label >
        <input type='checkbox' checked={value} onChange={handleChange}/>
        <h2>Страхование жизни и здоровья</h2>
      </label>
    </div>
  )
}
