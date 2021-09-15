import React from 'react'
import { banksData as banks } from './banksData'

export const Banks = () => {
  return (
    <div className='banks-list item'>
      {banks.map((el) => {
        return (
          <label key={el.value}>
            {el.pic}
            <input type='radio' name='radio' value='bank' />
            <h2>{el.name}</h2>
          </label>
        )
      })}
    </div>
  )
}
