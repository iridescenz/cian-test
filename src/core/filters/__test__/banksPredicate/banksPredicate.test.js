import { banksPredicate } from './banksPredicate'


describe('banks test', () => {
  test('banksPredicate', () => {
    const offer = {
      bankId: 'bank-psb',
      offerId: '77297faa-0b71-473e-a4d4-47095d64beff',
      type: 'MORTGAGE',
      product: 'USED',
      // ...
    }
    expect(banksPredicate(offer, [])).toBeTruthy()
    expect(banksPredicate(offer, ['bank-psb'])).toBeTruthy()
    expect(banksPredicate(offer, ['bank-psb', 'bank-raif'])).toBeTruthy()
    expect(banksPredicate(offer, ['bank-raif'])).toBeFalsy()
  })
})