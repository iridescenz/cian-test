import React from 'react'
import { banksData as banks } from './banksData'

export const Banks = () => {
  return (
    <div className='banks-block'>
        <h1>Банк</h1>
    <div className='banks-list items'>
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
    </div>
  )
}
