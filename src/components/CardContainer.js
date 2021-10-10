import React from 'react'
import { Card } from './Card'

export const CardContainer = ({ offers }) => {
  return (
    <div className='card-container'>
      {offers.length > 1 ? offers.map((el) => {
        return (
          <Card
            bankId={el.bankId}
            offerId={el.offerId}
            product={el.product}
            rate={el.rate}
            minInitialPayment={el.minInitialPayment}
            maxAmount={el.maxAmount}
          />
        )
      }) : <h1>Поиск не дал результатов</h1>}
    </div>
  )
}
