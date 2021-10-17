export const loanValuePredicate = (offers, value) => {
  if (value === undefined) {
    return true
  }
  if (value >= offers.minAmount && value <= offers.maxAmount) {
    return true
  }
  return false;
}
