const initialState = {
  banks: [],
  realtyType: 'FLAT',
  insurance: true,
  product: 'ALL',
  loanValue: undefined,
}
export const changeReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE') {
    return {...state, [action.name]: action.value }
  }
  if (action.type === 'CLEAR') {
    return initialState
  }
  return state
}