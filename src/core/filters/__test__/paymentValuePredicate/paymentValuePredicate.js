// const checkMinValue = (offer: IOffer, initialPayment: number) => {
//   if (offer.maxInitialPayment === 0 && initialPayment === 0) {
//     return true;
//   }
//   const minPropertyCost = initialPayment / offer.maxInitialPayment
//   const minCreditAmount = minPropertyCost - initialPayment;
//   return minCreditAmount <= offer.maxAmount
// }

// const checkMaxValue = (offer: IOffer, initialPayment: number) => {
//   if (offer.minInitialPayment === 0) {
//     return true;
//   }
//   const maxPropertyCost = initialPayment / offer.minInitialPayment
//   const maxCreditAmount = maxPropertyCost - initialPayment;
//   return maxCreditAmount >= offer.minAmount
// }

// export function filterByInitialPayment(offer: IOffer, initialPayment?: number) {
//   if (initialPayment === undefined) {
//     return true;
//   }
//   return checkMinValue(offer, initialPayment) && checkMaxValue(offer, initialPayment);
// }



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
    
