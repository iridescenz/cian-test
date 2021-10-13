import React from 'react'
import { Card } from './Card'

export const CardContainer = ({ offers }) => {
  return (
    <div className='card-container'>
      {offers.length > 1 ? offers.map((offer) => {
        return (
          <Card
            key={offer.offerId + offer.bankId}
            bankId={offer.bankId}
            offerId={offer.offerId}
            product={offer.product}
            rate={offer.rate}
            minInitialPayment={offer.minInitialPayment}
            maxAmount={offer.maxAmount}
          />
        )
      }) : <h1>Поиск не дал результатов</h1>}
    </div>
  )
}
