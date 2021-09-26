import React, {useState} from 'react'
import {planValues} from './planValues'

export const Plan = ({value, onChange} ) => {
  const handleChange = (e) => {
      onChange(e.target.value)
  }
  return (
    <div className='plan-block'>
    <h1>Программа</h1>
    <div className='plan items'>
            {planValues.map((el) => (
          <label key={el.id}>
            <input
              checked={el.id === value}
              onChange={handleChange}
              value={el.id}
              type='radio'
              name='plan'
            />
            <h2>{el.planValue}</h2>
          </label>
        ))
        }
    </div>

    </div>
  )
}