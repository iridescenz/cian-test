import { loanValuePredicate } from './loanValuePredicate'

describe('input loan value test', () => {
  test('loan value predicate', () => {
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
    expect(loanValuePredicate(offer, '')).toBeTruthy
    expect(loanValuePredicate(offer, 540000)).toBeTruthy
    expect(loanValuePredicate(offer, 16634899)).toBeFalsy
    expect(loanValuePredicate(offer, 300000)).toBeFalsy
    expect(loanValuePredicate(offer, 16634880)).toBeTruthy
  })
})
