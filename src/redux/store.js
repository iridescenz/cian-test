// import { combineReducers, createStore } from 'redux'
// // const { createStore } = require('redux');

// const initialState = {
//   changeReducer: {
//   banks: [],
//   realtyType: 'FLAT',
//   insurance: false,
//   product: 'ALL',
//   loanValue: undefined,
//   },
//   sortingReducer: {
//     sorting: null,
//   }

// }
// const changeReducer = (state = initialState.changeReducer, action) => {
//   if (action.type === 'CHANGE') {
//     return {...state, [action.name]: action.value }
//   }
//   if (action.type === 'CLEAR') {
//     return initialState
//   }
//   return state
// }
// const sortingReducer = (state = initialState.sortingReducer, action) => {
//   if (action.type === 'SORT') {
//     return {...state, sorting: action.payload }
//   }
//   return state
// }
// export const store = createStore(changeReducer)

// // 1. сделать еще один редюсер
// // 2. объединить их в один с помощью combineReducers
// // 3. в редьюсере сортировки зранить строку, описывающую сортировку

// // store.dispatch({
// //   type: "CHANGE",
// //   name: "realtyType",
// //   value: "ROOM",
// // })

// // console.log(store.getState())