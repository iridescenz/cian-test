const initialState = []

export const offersReducer = (state = initialState, action) => {
  if (action.type === 'SET_OFFERS') {
    return action.payload
  }
  return state
}
