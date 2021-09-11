import React from 'react'
import { SearchForm } from './SearchForm'
import { Banks } from './Banks'
import { RealtyForm } from './RealtyForm'


export const SearchComponent = () => {
  return (
    <div className='search-component'>
      <SearchForm />
      <RealtyForm />
      <Banks />
    </div>
  )
}


