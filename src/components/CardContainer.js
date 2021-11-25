import React, { useState, useEffect, useCallback } from 'react'
import { Card } from './Card'
import { offers } from '../mock/offers'
//import { idData } from './config'
import { filterOffers } from '../core/filters/filterOffers'
import { useSelector } from 'react-redux'
import { SortComponent } from './SortComponent'
import { priceFormatter } from './formatter'
//import axios from 'axios'

// const getData = () => {
//   return axios
//     .get('https://osh-emulator.fin.cian.ru/offers', {
//       headers: { userId: idData.userId },
//     })
//     .then((result) => result.data)
// }
// const postData = () => {
//   return axios
//     .post('https://osh-emulator.fin.cian.ru/submit', null, {
//       headers: { userId: idData.userId },
//     })
//     .then((result) => result.data)
// }

const comparators = {
  percentage: (a, b) => a.rate - b.rate,
  payment: (a, b) => a.minInitialPayment - b.minInitialPayment,
  amountUp: (a, b) => b.maxAmount - a.maxAmount,
}

export const CardContainer = () => {
  // const [offers, setOffers] = useState([])
  // const [
  //   { banksAnswered, banksOriginal, rejectedBanks },
  //   setDependencies,
  // ] = useState({})
  // let ansLength = banksAnswered === undefined ? 0 : (banksAnswered.length > 0 ? banksAnswered.length : 0)
  // let orgLength = banksOriginal === undefined ? 0 : (banksOriginal.length > 0 ? banksOriginal.length : 0)
  // let rejLength = rejectedBanks === undefined ? 0 : (rejectedBanks.length > 0 ? rejectedBanks.length : 0)


  const filters = useSelector((state) => state.change)
  const sorting = useSelector((state) => state.sort)

  const filteredOffers = filterOffers(offers, filters).sort(
    comparators[sorting]
  )
  // const stat = useSelector((state) => state)
  // console.log('🙄', stat)

  // function startLoading() {
  //   postData()
  // }

  // function updateOffers() {
  //   getData()
  //     .then((data) => {
  //       setDependencies(data)
  //       setOffers(data.offers)
  //       console.log('updating', data)
  //     })
  //        if(
  //         orgLength > 0 && orgLength !== ansLength + rejLength
  //       ) {
  //         console.log(orgLength, rejLength, ansLength)
  //         setTimeout(() => updateOffers(), 3670)
  //       } 
  // }
  // useEffect(() => {
  //   setTimeout(() =>  startLoading(), 1000)
  //   setTimeout(() => updateOffers(), 2000)
  // }, [])

  if (filteredOffers.length === 0) {
    return <h1>Поиск не дал результатов</h1>
  }

  return (
    <div className='card-container'>
      {/* <button onClick={() => updateOffers()}>get offers</button> */}
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
