import React, { useState } from 'react'
import { SearchComponent } from './components/SearchComponent'
import { CardContainer } from './components/CardContainer'
import { offers } from './mock/offers'
import { filterOffers } from './core/filters/filterOffers'
import { PaymentValuePredicate } from './core/filters/PaymentValuePredicate'

function App() {
  const [filters, setFilters] = useState({
    banks: [],
    realtyType: 'flat',
    insurance: false,
    product: 'ALL',
    loanValue: '1000000',
    paymentValue: '100',
  })

  const filteredOffers = filterOffers(offers, filters)
  // исправить

  console.log(filters)

  console.log(filteredOffers, 'filtered')

  function changeFilter(name, value) {
    return setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='pg-container'>
      <CardContainer offers={filteredOffers} />
      <SearchComponent filters={filters} changeFilter={changeFilter} />
      <PaymentValuePredicate filters={filters}/>
    </div>
  )
}

export default App
