import React from 'react'
import { SearchComponent } from './components/SearchComponent'
import { CardContainer } from './components/CardContainer'

import { store } from './redux/store/index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className='pg-container'>
        <CardContainer />
        <SearchComponent />
      </div>
    </Provider>
  )
}

export default App
