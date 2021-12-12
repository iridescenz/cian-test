import React, { useState, useEffect } from 'react'
import { Card } from './Card'
import { getData, postData } from './functions/api'
import { sleep, priceFormatter, comparators } from './functions/helpers'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector, useDispatch } from 'react-redux'
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

function fetchOffersThunk(sorting) {
  return function (dispatch) {
    postData(sorting)
    loadingUntilDataReceived((data) => {
      dispatch({ type: 'SET_OFFERS', payload: data })
    })
  }
}

// function fetchOffersThunk(sorting) {
//   return async function (dispatch) {
//     const data = await postData(sorting)
//     dispatch({ type: 'SET_OFFERS', payload: data })
//   }
// }

export const CardContainer = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.change)
  const sorting = useSelector((state) => state.sort)
  const offers = useSelector((state) => state.offers)
  const filteredOffers = filterOffers(offers, filters).sort(
    comparators[sorting]
  )

  useEffect(() => {
    // fetchOffersThunk(sorting)(dispatch)
    dispatch(fetchOffersThunk(sorting))
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
