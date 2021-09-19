import React, {useState} from 'react'
import {planValues} from './planValues'

export const Plan = () => {
  const [plan, setPlan] = useState('all')
  const handleChange = (e) => setPlan(e.target.value)
  return (
    <div className='plan-block'>
    <h1>Программа</h1>
    <div className='plan items'>
            {planValues.map((el) => (
          <label key={el.id}>
            <input
              checked={el.id === plan}
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