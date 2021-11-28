import React from 'react'
import { Banks } from './Banks'
import { Product } from './Product'
import { RealtyForm } from './RealtyForm'
import { Insurance } from './Insurance'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const SearchComponent = () => {
  const filters = useSelector((state) => state.change)
  const dispatch = useDispatch()
  const changeFilter = (name, value) => {
    dispatch({ type: 'CHANGE', name, value })
  }
  return (
    <div className='search-component'>

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
