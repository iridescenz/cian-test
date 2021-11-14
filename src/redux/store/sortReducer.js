const initialState = 'percentage';

export const sortReducer = (state = initialState, action) => {
  if (action.type === 'SORT') {
    return action.payload;
  }
  return state
}

export const setReducePercentage = () => {
  return {
    type: 'SORT',
    payload: 'percentage',
  }
}

export const setReducePayment = () => {
  return {
    type: 'SORT',
    payload: 'payment',
  }
}

export const setIncreaseAmount = () => {
  return {
    type: 'SORT',
    payload: 'amountUp',
  }
}
