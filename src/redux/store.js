import { createStore } from 'redux'
// const { createStore } = require('redux');

const initialState = {
  banks: [],
  realtyType: 'FLAT',
  insurance: false,
  product: 'ALL',
  loanValue: undefined,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'CHANGE') {
    return {...state, [action.name]: action.value}
  }
  if (action.type === 'CLEAR') {
    return initialState
  }
  return state
}

export const store = createStore(reducer)

// 1. сделать еще один редюсер
// 2. объединить их в один с помощью combineReducers
// 3. в редьюсере сортировки зранить строку, описывающую сортировку

// store.dispatch({
//   type: "CHANGE",
//   name: "realtyType",
//   value: "ROOM",
// })

// console.log(store.getState())