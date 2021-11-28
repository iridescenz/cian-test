export const sleep = (ms) => {
  return new Promise((resolve, _) =>
    setTimeout(() => {
      resolve()
    }, ms)
  )
}

export const priceFormatter = (price) =>
price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const comparators = {
  percentage: (a, b) => a.rate - b.rate,
  payment: (a, b) => a.minInitialPayment - b.minInitialPayment,
  amountUp: (a, b) => b.maxAmount - a.maxAmount,
}
