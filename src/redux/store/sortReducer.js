const initialState = {
    sorting: null,
}

export const sortReducer = (state = initialState, action) => {
  if (action.type === 'SORT') {
    return {...state, sorting: action.payload }
  }
  return state
}