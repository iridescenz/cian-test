import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { changeReducer } from './changeReducer'
import { sortReducer } from './sortReducer'
import { offersReducer } from './offersReducer'


const rootReducer = combineReducers({
  sort: sortReducer,
  change: changeReducer,
  offers: offersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))