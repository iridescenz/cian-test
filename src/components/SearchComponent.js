import React from 'react'
import { Banks } from './Banks'
import { Product } from './Product'
import { RealtyForm } from './RealtyForm'
import { Insurance } from './Insurance'
import { InputForm } from './InputForm'

export const SearchComponent = ({ filters, changeFilter }) => {
  return (
    <div className='search-component'>
      <InputForm
        value={filters.loanValue}
        onChange={(value) => changeFilter('loanValue', value)}
        value1={filters.paymentValue}
        onChange1={(value) => changeFilter('paymentValue', value)}
      />
      <RealtyForm
        value={filters.realtyType}
        onChange={(value) => changeFilter('realtyType', value)}
      />
      <Product
        value={filters.product}
        onChange={(value) => changeFilter('product', value)}
      />
      <Insurance
        value={filters.insurance}
        onChange={(value) => changeFilter('insurance', value)}
      />
      <Banks
        value={filters.banks}
        onChange={(value) => changeFilter('banks', value)}
      />
    </div>
  )
}
