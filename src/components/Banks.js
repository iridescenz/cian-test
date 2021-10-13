import React from 'react'
import { banksData as banks } from './banksData'

export const Banks = ({ value, onChange }) => {
  function handleChange(e) {
    let arr
    if (value.includes(e.target.value)) {
      arr = value.filter((bankValue) => bankValue !== e.target.value)
    } else {
      arr = [...value, e.target.value]
    }
    onChange(arr)
  }

  return (
    <div className='banks-block'>
      <h1>Банк</h1>
      <div className='banks-list items'>
        {banks.map((bank) => {
          return (
            <label key={bank.bankId}>
              {bank.bankLogo}
              <input
                type='checkbox'
                name='bank'
                value={bank.bankId}
                checked={value.includes(bank.bankId)}
                onChange={handleChange}
              />
              <h2>{bank.bankName}</h2>
            </label>
          )
        })}
      </div>
    </div>
  )
}
