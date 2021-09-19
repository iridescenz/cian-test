import React from 'react'

export const Card = ({
  bankName,
  bankLogo,
  planValue,
  rate,
  loanAmount,
  payment,
}) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h1>{bankName}</h1>
        {bankLogo}
      </div>
      <h2 className='plan-value'>{planValue}</h2>
      <div className='loan-info'>
        <div className='rate'>
          <h2>Ставка</h2>
          <h1>{rate}</h1>
        </div>
        <div className='loan'>
          <h2>Кредит</h2>
          <h1>{loanAmount}</h1>
        </div>
        <div className='payment'>
          <h2>Взнос</h2>
          <h1>{payment}</h1>
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
