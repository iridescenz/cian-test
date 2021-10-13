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
    formValue: ''
  })

  const filteredOffers = offers
// исправить



  console.log(filteredOffers, 'filtered')

  function changeFilter(name, value) {
    return setFilters((prev) => ({ ...prev, [name]: value }))
  }


  return (
    <div className='pg-container'>
      <CardContainer offers={filteredOffers} />
      <SearchComponent filters={filters} changeFilter={changeFilter} />
    </div>
  )
}

export default App
