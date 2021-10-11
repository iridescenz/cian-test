import { productPredicate } from './productPredicate'

describe('filter by product type', () => {
  test('productPredicate', () => {
    const offer = {
      bankId: 'bank-psb',
      offerId: '77297faa-0b71-473e-a4d4-47095d64beff',
      type: 'MORTGAGE',
      product: 'USED',
      // ...
    }
    expect(productPredicate(offer, 'ALL')).toBeTruthy()
    expect(productPredicate(offer, 'USED')).toBeTruthy()
    expect(productPredicate(offer, 'NEW')).toBeFalsy()
  })
})
