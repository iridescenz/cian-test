import React, { useState } from 'react'
import { SearchComponent } from './components/SearchComponent'
import { CardContainer } from './components/CardContainer'

function App() {
  const [filters, setFilters] = useState({
    banks: ['bank-vtb', 'bank-sovcom'], // ["bank-vtb", "bank-domrf"]
    realtyType: 'flat',
  })

  console.log(filters)

  function changeFilter(name, value) {
    return setFilters((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='pg-container'>
      <CardContainer />
      <SearchComponent filters={filters} changeFilter={changeFilter} />
    </div>
  )
}

export default App
