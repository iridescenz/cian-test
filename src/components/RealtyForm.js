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
        {data.map((el) => (
          <label
            key={el.id}
            style={{
              backgroundImage: `url(${url[el.id]})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center left',
            }}
          >
            <input
              checked={el.id === value}
              onChange={handleChange}
              value={el.id}
              type='radio'
              name='estate'
            />
            <h2>{el.type}</h2>
          </label>
        ))}
      </div>
    </div>
  )
}
