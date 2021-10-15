export const loanValuePredicate = (offers, value) => {
  if (value < offers.minAmount) {
    return false
  }
  if (value > offers.maxAmount) {
    return false
  }
  if (value === undefined) {
    return true
  }
  if (value >= offers.minAmount && value <= offers.maxAmount) {
    return true
  }
}
