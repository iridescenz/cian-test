import React from 'react'
import { Card } from './Card'
import { offers } from '../mock/offers'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector } from 'react-redux'
import {SortComponent} from './SortComponent'

export const CardContainer = () => {
  const filters = useSelector((state) => state.change)
  const stat = useSelector((state) => state)
  const sorting = useSelector((state) => state.sort.sorting)
  console.log("🙄", stat)
  let filteredOffers = filterOffers(offers, filters)
  if (filteredOffers.length === 0) {
   return  (<h1>Поиск не дал результатов</h1>)
  }
  if (sorting === 'percentage') {
    filteredOffers = filteredOffers.sort((a, b) => a.rate - b.rate)
  }
  if (sorting === 'payment') {
    filteredOffers = filteredOffers.sort((a, b) => a.minInitialPayment - b.minInitialPayment)
  }
  if (sorting === 'amountUp') {
    filteredOffers = filteredOffers.sort((a, b) => b.maxAmount - a.maxAmount)
  }
  const priceFormatter = (price) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
    <div className='card-container'>
        <SortComponent />
      {filteredOffers.map((offer) => {
          return (
            <Card
              key={offer.offerId}
              bankId={offer.bankId}
              offerId={offer.offerId}
              product={offer.product}
              rate={offer.rate}
              minInitialPayment={offer.minInitialPayment}
              maxAmount={`${priceFormatter(offer.maxAmount)} ₽`}
            />
          )
        }) }
    </div>
  )
}
