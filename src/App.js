import React, { useState } from 'react'
import { SearchComponent } from './components/SearchComponent'
import { CardContainer } from './components/CardContainer'
import { offers } from './components/data'

function App() {
  const [filters, setFilters] = useState({
    banks: [], 
    realtyType: 'flat',
    insurance: false,
    product: 'all'
  })

  const filteredOffers = offers.filter(el => filters.banks.length === 0 || filters.banks.includes(el.bankId))
  console.log(filteredOffers, 'filtered')
  function changeFilter(name, value) {
    return setFilters((prev) => ({ ...prev, [name]: value }))
  }

  //фильтр по всем полям 
  // карточка 
  return (
    <div className='pg-container'>
      <CardContainer offers={filteredOffers}/>
      <SearchComponent filters={filters} changeFilter={changeFilter} />
    </div>
  )
}

export default App
