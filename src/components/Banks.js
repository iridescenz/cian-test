import React from 'react'
import { banksData as banks } from './banksData'

export const Banks = () => {
  return (
    <div className='banks-list item'>
      {banks.map((el) => {
        return (
          <label key={el.value}>
            <h2>{el.name}</h2>
            <input type='radio' name='radio' value='bank' />
            <img src={`${el.value}.png`} alt={el.value} />
          </label>
        )
      })}
    </div>
  )
}
