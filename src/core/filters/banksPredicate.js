export const banksPredicate = (offer, value) => {
  return value.length === 0 || value.includes(offer.bankId)
}
