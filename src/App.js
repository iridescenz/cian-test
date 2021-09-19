import React from 'react'
import { SearchComponent } from './components/SearchComponent'
import { CardContainer  } from './components/CardContainer'

function App() {
  return (
    <div className='pg-container'>
      <CardContainer />
      <SearchComponent />
    </div>
  )
}

export default App
