import React, { useState, useEffect, useCallback } from 'react'
import { Card } from './Card'
// import { offers } from '../mock/offers'
import { data } from './config'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector } from 'react-redux'
import { SortComponent } from './SortComponent'
import { priceFormatter } from './formatter'
import axios from 'axios'

const getData = () => {
  return axios
    .get('https://osh-emulator.fin.cian.ru/offers', {
      headers: { userId: data.userId },
    })
    .then((result) => result.data)
}
const postData = () => {
  return axios
    .post('https://osh-emulator.fin.cian.ru/submit', null, {
      headers: { userId: data.userId },
    })
    .then((result) => result.data)
}

const comparators = {
  percentage: (a, b) => a.rate - b.rate,
  payment: (a, b) => a.minInitialPayment - b.minInitialPayment,
  amountUp: (a, b) => b.maxAmount - a.maxAmount,
}

export const CardContainer = () => {
  const [offers, setOffers] = useState([])
  const [
    { banksAnswered, banksOriginal, rejectedBanks },
    setDependencies,
  ] = useState({})
  const filters = useSelector((state) => state.change)
  const sorting = useSelector((state) => state.sort)

  const filteredOffers = filterOffers(offers, filters).sort(
    comparators[sorting]
  )
  // const stat = useSelector((state) => state)
  // console.log('🙄', stat)

  function startLoading() {
    postData()
  }

  function updateOffers() {
    getData()
      .then((data) => {
        setDependencies(data)
        setOffers(data.offers)
      })
      .then((data) => {
        console.log('updating', data)
        console.log('ff', banksAnswered, banksOriginal, rejectedBanks)
      })
      .then(() => setTimeout(() => {}, 3300))
      .then(() => {
        if (
          banksOriginal.length > 0 &&
          banksOriginal.length !== banksAnswered.length + rejectedBanks.length
        ) {
          setTimeout(() => updateOffers(), 3670)
        }
      })
  }
  useEffect(() => {
    startLoading()
    setTimeout(() => updateOffers(), 2000)
  }, [])

  // if (filteredOffers.length === 0) {
  //   return <h1>Поиск не дал результатов</h1>
  // }

  return (
    <div className='card-container'>
      <button onClick={() => updateOffers()}>get offers</button>
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
