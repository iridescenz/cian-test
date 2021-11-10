import React from 'react'
import { Card } from './Card'
import { offers } from '../mock/offers'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector } from 'react-redux'

export const CardContainer = () => {
  const filters = useSelector((state) => state.change)
  const stat = useSelector((state) => state)
  const sorting = useSelector((state) => state.sort.sorting)
  console.log("🙄", stat)
  let filteredOffers = filterOffers(offers, filters)
  if (sorting === 'sorted') {
    filteredOffers = filteredOffers.sort((a, b) => a.rate - b.rate)
  }
  return (
    <div className='card-container'>
      {filteredOffers.length > 0 ? (
        filteredOffers.map((offer) => {
          return (
            <Card
              key={offer.offerId}
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
