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
            {productValues.map((el) => (
          <label key={el.id}>
            <input
              checked={el.id === value}
              onChange={handleChange}
              value={el.id}
              type='radio'
              name='plan'
            />
            <h2>{el.productValue}</h2>
          </label>
        ))
        }
    </div>

    </div>
  )
}