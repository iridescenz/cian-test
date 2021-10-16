import React, { useState, createContext } from 'react'
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
    loanValue: '',
    paymentValue: '',
  })

  const filteredOffers = filterOffers(offers, filters)
  // исправить

  console.log(filters, 'filters')

//  const loanValueFromApp = createContext(filters.loanValue)

  //нужно ли создавать контекст и передавать значение компоненту PaymentValuePredicate
  // зависит ли платеж от значения размера кредита вообще?
  // не бэд прекстис делать функцию компонентом?

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
