export const productPredicate = (offer, value) => {
  if (value === 'ALL') {
    return true
  }
  return offer.product === value
}