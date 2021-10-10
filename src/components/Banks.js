import React from 'react'
import { banksData as banks } from './banksData'

export const Banks = ({ value, onChange }) => {
  function handleChange(e) {
    let arr
    if (value.includes(e.target.value)) {
      arr = value.filter((el) => el !== e.target.value)
    } else {
      arr = [...value, e.target.value]
    }
    onChange(arr)
  }

  return (
    <div className='banks-block'>
      <h1>Банк</h1>
      <div className='banks-list items'>
        {banks.map((el) => {
          return (
            <label key={el.bankId}>
              {el.bankLogo}
              <input
                type='checkbox'
                name='bank'
                value={el.bankId}
                checked={value.includes(el.bankId)}
                onChange={handleChange}
              />
              <h2>{el.bankName}</h2>
            </label>
          )
        })}
      </div>
    </div>
  )
}
