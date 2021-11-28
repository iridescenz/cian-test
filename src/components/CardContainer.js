import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import { getData, postData } from './functions/api'
import { sleep, priceFormatter, comparators } from './functions/helpers'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector } from 'react-redux'
import { SortComponent } from './SortComponent'

async function loadingUntilDataReceived(callback) {
  while (true) {
    const {
      banksAnswered,
      banksOriginal,
      rejectedBanks,
      offers,
    } = await getData()
    callback(offers)
    if (banksOriginal.length === banksAnswered.length + rejectedBanks.length) {
      break
    }
    await sleep(3_000)
  }
}

export const CardContainer = () => {
  const [offers, setOffers] = useState([])
  const filters = useSelector((state) => state.change)
  const sorting = useSelector((state) => state.sort)
  const filteredOffers = filterOffers(offers, filters).sort(
    comparators[sorting]
  )

  useEffect(() => {
    postData()
    loadingUntilDataReceived(setOffers)
  }, [])

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
      })}
    </div>
  )
}
