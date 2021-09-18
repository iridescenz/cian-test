import React from 'react'
import { Banks } from './Banks'
import { Plan } from './Plan'
import { RealtyForm } from './RealtyForm'
import { Insurance } from './Insurance'
import { LoanOptions } from './LoanOptions'

export const SearchComponent = () => {
  return (
    <div className='search-component'>
      <LoanOptions />
      <RealtyForm />
      <Plan />
      <Insurance />
      <Banks />
    </div>
  )
}
