import { paymentValuePredicate } from './paymentValuePredicate'

describe('input payment value test', () => {
  test('payment value predicate', () => {
    const offer = {
      bankId: 'bank-psb',
      offerId: '1e1c0e93-e9f4-4efd-91dd-b20027a9b5fb',
      type: 'MORTGAGE',
      product: 'NEW',
      creditProgram: 'Standard_PSB',
      rate: 0.091,
      minInitialPayment: 0.15,
      maxInitialPayment: 0.8,
      maxPayment: 140740.2,
      minAmount: 500000,
      maxAmount: 16634880,
      minTerm: 36,
      maxTerm: 300,
      // ...
    }
    expect(paymentValuePredicate('', offer, '')).toBeTruthy
    expect(paymentValuePredicate(9000000, offer, 540000)).toBeFalsy
    expect(paymentValuePredicate('', offer, 160899)).toBeTruthy
    expect(paymentValuePredicate(9900000, offer, '')).toBeTruthy
    expect(paymentValuePredicate(9900000, offer, 166880)).toBeTruthy
  })
})


//fix!