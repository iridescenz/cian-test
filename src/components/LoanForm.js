import React from 'react'
import { SearchForm } from './SearchForm'

export const LoanForm = () => {
  return (
    <div>
      <SearchForm name='Первоначальный взнос' />
      <SearchForm name='Размер кредита'/>
    </div>
  )
}

