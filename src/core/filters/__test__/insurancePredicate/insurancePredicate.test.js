import {insurancePredicate} from './insurancePredicate'

describe('insurancePredicate', () => {
  test('offer with truthy insurance requirement', () => {
    const offer1 = {
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
    expect(insurancePredicate(offer1, true)).toBeTruthy()
    expect(insurancePredicate(offer1, false)).toBeFalsy()
  })

  test('offer without insurance requirement', () => {
    const offer2 = {
      bankId: 'bank-psb',
      offerId: '77297faa-0b71-473e-a4d4-47095d64beff',
      type: 'MORTGAGE',
      product: 'USED',
      requirements: [
        {
          key: 'PROPERTY_TYPE',
          value: 'FLAT',
        },
      ],
      // ...
    }

    expect(insurancePredicate(offer2, true)).toBeFalsy()
    expect(insurancePredicate(offer2, false)).toBeTruthy()
  })

  test('offer with falsy insurance requitement', () => {
    const offer3 = {
      bankId: 'bank-psb',
      offerId: '77297faa-0b71-473e-a4d4-47095d64beff',
      type: 'MORTGAGE',
      product: 'USED',
      requirements: [
        {
          key: 'INSURANCE',
          value: false,
        },
        {
          key: 'PROPERTY_TYPE',
          value: 'FLAT',
        },
      ],
      // ...
    }

    expect(insurancePredicate(offer3, true)).toBeFalsy()
    expect(insurancePredicate(offer3, false)).toBeTruthy()
  })
})
