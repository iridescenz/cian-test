import { createStore, combineReducers } from 'redux'
import { changeReducer } from './changeReducer'
import { sortReducer } from './sortReducer'

const rootReducer = combineReducers({
  sort: sortReducer,
  change: changeReducer,
})

export const store = createStore(rootReducer)