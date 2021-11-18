import React, { useState, useEffect } from 'react'
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
  // const stat = useSelector((state) => state)
  // console.log('🙄', stat)
  const [offers, setOffers] = useState([])
  const [original, setOriginal] = useState(0)
  const [answered, setAnswered] = useState(0)
  const [rejected, setRejected] = useState(0)
  // useEffect(() => {
  //   postData()
  // }, [])

  function startLoading() {
    postData()
  }
  //

  function updateOffers() {
    getData().then((data) => {
      console.log('data', data)
      setOffers(data.offers)
      setOriginal(data.banksOriginal.length)
      setAnswered(data.banksAnswered.length)
      setRejected(data.rejectedBanks.length)
    })
  }
  useEffect(() => {
    startLoading()
    console.log('started')
  }, [])
  useEffect(() => {
    updateOffers()
  }, [])

  const filters = useSelector((state) => state.change)
  const sorting = useSelector((state) => state.sort)

  const filteredOffers = filterOffers(offers, filters).sort(
    comparators[sorting]
  )

  // if (filteredOffers.length === 0) {
  //   return <h1>Поиск не дал результатов</h1>
  // }

  return (
    <div className='card-container'>
      <button onClick={() => startLoading()}>start loading</button>
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
