import React from 'react'
import { realtyTypes as data } from './realty-types'
import flat from './logos/flat-logo.svg'
import apart from './logos/apart-logo.svg'
import room from './logos/room-logo.svg'
import house from './logos/house-logo.svg'

const url = {
  flat,
  apart,
  room,
  house,
}

export const RealtyForm = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <div className='realty-block'>
      <h1>Тип недвижимости</h1>
      <div className='realty-form items'>
        {data.map((realtyType) => (
          <label
            key={realtyType.id}
            style={{
              backgroundImage: `url(${url[realtyType.id]})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center left',
            }}
          >
            <input
              checked={realtyType.id === value}
              onChange={handleChange}
              value={realtyType.id}
              type='radio'
              name='estate'
            />
            <h2>{realtyType.type}</h2>
          </label>
        ))}
      </div>
    </div>
  )
}
