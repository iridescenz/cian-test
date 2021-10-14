import { predicates } from './predicates'

export function filterOffers(offers, filters) {
  return offers.filter((offer) => {
    return Object.keys(filters).every((key) =>
      predicates[key](offer, filters[key])
    )
  })
}
