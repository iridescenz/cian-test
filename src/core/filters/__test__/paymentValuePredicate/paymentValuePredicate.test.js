import { paymentValuePredicate } from './paymentValuePredicate'

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

describe('input payment value test', () => {
  test('payment value predicate with undefined loanValue', () => {
    const prop = {
      filters: {
        banks: [],
        realtyType: 'flat',
        insurance: false,
        product: 'ALL',
        loanValue: '',
        paymentValue: '',
      },
    }
    expect(paymentValuePredicate(prop, offer, '')).toBeTruthy
    //loanValue = '' & payment = ''
    expect(paymentValuePredicate(prop, offer, 1000)).toBeTruthy
    // loanValue = '' & payment 1000
  })

  test('payment value predicate with loanValue = 1000', () => {
    const prop1 = {
      filters: {
        banks: [],
        realtyType: 'flat',
        insurance: false,
        product: 'ALL',
        loanValue: 1000,
        paymentValue: '',
      },
    }


    // offer
    // "minInitialPayment": 0.2,
    // "maxInitialPayment": 0.5,
    // "maxPayment": 164196.9,
    // "minAmount": 7_000_001,
    // "maxAmount": 20_777_207,


    // loanValue === размер кредита → 
    // я хочу взять 4_000_000
    // 4_000_000 === 80% от стоимости
    // должен быть взнос 

    // paymentValue === первоначальный взнос
    // 2_000_000
    // 0.2 → кредит = 8_000_000


    expect(paymentValuePredicate(prop1, offer, 900)).toBeFalsy
    //loanValue = 1000 & payment = 900, should return false bc
    //maxInitialPayment = 80% from loanValue (800)

    expect(paymentValuePredicate(prop1, offer, 100)).toBeFalsy
    //loanValue = 1000 & payment = 100, should return false bc
    // minInitialPayment = 15% from loanValue (150)

    expect(paymentValuePredicate(prop1, offer, '')).toBeTruthy
    // loanValue = 1000 and payment = ''

    expect(paymentValuePredicate(prop1, offer, 300)).toBeTruthy
    // loanValue = 1000 and payment = 300
  })
})
