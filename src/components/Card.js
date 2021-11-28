import React from 'react'
import { banksData } from './banksData'
import { productValues } from './productValues'
export const Card = ({
  bankId,
  offerId,
  product,
  creditProgram,
  rate,
  minInitialPayment,
  maxInitialPayment,
  maxPayment,
  minAmount,
  maxAmount,
  minTerm,
  maxTerm,
  requirements,
}) => {
  const bankLogo = banksData
    .filter((bank) => bank.bankId === bankId)
    .map((bank) => bank.bankLogo)
  const bankName = banksData
    .filter((bank) => bank.bankId === bankId)
    .map((bank) => bank.bankName)
  const productType = productValues
    .filter((prod) => prod.id === product)
    .map((prod) => prod.productValue)
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='b-name'>
          <h1>{bankName}</h1>
          <h2 className='product-value'>{productType}</h2>
        </div>
        {bankLogo}
      </div>
      <div className='loan-info'>
        <div className='rate'>
          <h2>Ставка</h2>
          <h1>{(rate * 100).toFixed(2)} %</h1>
        </div>
        <div className='loan'>
          <h2>Кредит</h2>
          <h1>до {maxAmount}</h1>
        </div>
        <div className='payment'>
          <h2>Взнос </h2>
          <h1> от {minInitialPayment * 100} %</h1>
        </div>
      </div>
      <div className='more'>
        <button className='light-blue-btn' type='button'>
          Подробнее
        </button>
        <button className='blue-btn' type='submit'>
          Отправить заявку
        </button>
      </div>
    </div>
  )
}
