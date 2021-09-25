import React from 'react'
import { Banks } from './Banks'
import { Plan } from './Plan'
import { RealtyForm } from './RealtyForm'
import { Insurance } from './Insurance'
import { LoanForm } from './LoanForm'

export const SearchComponent = ({ filters, changeFilter }) => {
  return (
    <div className='search-component'>
      <LoanForm />
      <RealtyForm />
      <Plan />
      <Insurance />
      <Banks
        value={filters.banks}
        onChange={(value) => changeFilter('banks', value)}
      />
    </div>
  )
}
