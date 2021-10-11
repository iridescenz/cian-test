import React, { useState } from 'react'
import { SearchComponent } from './components/SearchComponent'
import { CardContainer } from './components/CardContainer'
import { offers } from './mock/offers'

function App() {
  const [filters, setFilters] = useState({
    banks: [],
    realtyType: 'flat',
    insurance: false,
    product: 'ALL',
  })

  const filteredOffers = filterOffers(offers, filters)

  console.log(filteredOffers, 'filtered')

  function changeFilter(name, value) {
    return setFilters((prev) => ({ ...prev, [name]: value }))
  }

  //фильтр по всем полям
  // карточка
  return (
    <div className='pg-container'>
      <CardContainer offers={filteredOffers} />
      <SearchComponent filters={filters} changeFilter={changeFilter} />
    </div>
  )
}

export default App
