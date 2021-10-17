import React from 'react'
import { Card } from './Card'
import { offers } from '../mock/offers'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector } from 'react-redux'

export const CardContainer = () => {
  const filters = useSelector((state) => state)
console.log("🙄", filters)
  const filteredOffers = filterOffers(offers, filters)
  return (
    <div className='card-container'>
      {filteredOffers.length > 0 ? (
        filteredOffers.map((offer) => {
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
        })
      ) : (
        <h1>Поиск не дал результатов</h1>
      )}
    </div>
  )
}
