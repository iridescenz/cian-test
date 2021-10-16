export const paymentValuePredicate = (props, offers, value) => {
  const minValidLoanValue =
    props.filters.loanValue * offers.minInitialPayment || undefined
  const maxValidLoanValue =
    props.filters.loanValue * offers.maxInitialPayment || undefined
  if (
    minValidLoanValue === undefined ||
    props.filters.loanValue === undefined
  ) {
    return true
  }
  if (value >= minValidLoanValue && value <= maxValidLoanValue) {
    return true
  }
  if (value < minValidLoanValue) {
    return false
  }
  if (value > maxValidLoanValue) {
    return false
  }
}
    
