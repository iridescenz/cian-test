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
    .filter((el) => el.bankId === bankId)
    .map((el) => el.bankLogo)
  const bankName = banksData
    .filter((el) => el.bankId === bankId)
    .map((el) => el.bankName)
  const productType = productValues
    .filter((el) => el.id === product)
    .map((el) => el.productValue)
  return (
    <div className='card' key={offerId}>
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
          <h1> от {(minInitialPayment * 100)} %</h1>
        </div>
      </div>
      <div></div>
      <button className='light-blue-btn' type='button'>
        Подробнее
      </button>
      <button className='blue-btn' type='submit'>
        Отправить заявка
      </button>
    </div>
  )
}
