import React from 'react'
import {productValues} from './productValues'

export const Product = ({value, onChange} ) => {
  const handleChange = (e) => {
      onChange(e.target.value)
  }
  return (
    <div className='plan-block'>
    <h1>Программа</h1>
    <div className='plan items'>
            {productValues.map((val) => (
          <label key={val.id}>
            <input
              checked={val.id === value}
              onChange={handleChange}
              value={val.id}
              type='radio'
              name='plan'
            />
            <h2>{val.productValue}</h2>
          </label>
        ))
        }
    </div>

    </div>
  )
}