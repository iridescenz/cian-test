import { createStore, combineReducers } from 'redux'
import { changeReducer } from './changeReducer'
import { sortReducer } from './sortReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  sort: sortReducer,
  change: changeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())