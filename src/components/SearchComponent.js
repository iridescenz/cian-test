import React from 'react'
import { Banks } from './Banks'
import { Product } from './Product'
import { RealtyForm } from './RealtyForm'
import { Insurance } from './Insurance'
import { LoanForm } from './LoanForm'

export const SearchComponent = ({ filters, changeFilter }) => {
  console.log(filters)
  return (
    <div className='search-component'>
      <LoanForm
        value={filters.formValue}
        onChange={(value) => changeFilter('formValue', value)}
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
