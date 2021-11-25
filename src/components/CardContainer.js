import React, { useState, useEffect, useCallback } from 'react'
import { Card } from './Card'
//import { offers } from '../mock/offers'
import { idData } from './config'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector } from 'react-redux'
import { SortComponent } from './SortComponent'
import { priceFormatter } from './formatter'
import axios from 'axios'

const getData = () => {
  return axios
    .get('https://osh-emulator.fin.cian.ru/offers', {
      headers: { userId: idData.userId },
    })
    .then((result) => result.data)
}
const postData = () => {
  return axios
    .post('https://osh-emulator.fin.cian.ru/submit', null, {
      headers: { userId: idData.userId },
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
  const [responseData, setResponseData] = useState({})
  // var ans, rej, orig
  let ans = responseData?.banksAnswered?.length 
  let rej = responseData?.rejectedBanks?.length
  // orig = responseData?.banksOriginal?.length

  const filters = useSelector((state) => state.change)
  const sorting = useSelector((state) => state.sort)

  const filteredOffers = filterOffers(offers, filters).sort(
    comparators[sorting]
  )
  // const stat = useSelector((state) => state)
  // console.log('🙄', stat)

  function startLoading() {
    console.log('started download')
    postData()
  }

  function updateOffers() {
    // if ((orig === undefined )|| (orig > 0 && orig !== rej + ans)) {
    //   console.log(orig, rej, ans, 'hetr')
    //   return setTimeout(() => updateOffers(), 3000)
    // }     
        getData()
      .then((data) => {
        setOffers(data.offers)
        setResponseData(data)      
        console.log('upd', data)
      })

  }
  useEffect(() => {
    setTimeout(() =>  startLoading(), 1000)
    const upd = setInterval(() => updateOffers(), 2500)
    setTimeout(() =>  clearInterval(upd), 30000)
  }, [])
// useEffect(() => {
//   setTimeout(() =>  startLoading(), 1000)
//   setTimeout(() =>  updateOffers(), 1000)
// }, [])
// useEffect(() => {
//   setTimeout(() =>  updateOffers(), 3000)
// }, [ans, rej])
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
