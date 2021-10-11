import { realtyTypePredicate } from './realtyTypePredicate'

describe('filters', () => {
  test('realtyTypePredicate', () => {
    const offer = {
      bankId: 'bank-psb',
      offerId: '77297faa-0b71-473e-a4d4-47095d64beff',
      type: 'MORTGAGE',
      product: 'USED',
      requirements: [
        {
          key: 'INSURANCE',
          value: true,
        },
        {
          key: 'PROPERTY_TYPE',
          value: 'FLAT',
        },
      ],
      // ...
    }

    expect(realtyTypePredicate(offer, 'FLAT')).toBeTruthy()
    expect(realtyTypePredicate(offer, 'APARTMENTS')).toBeFalsy()
  })
})
