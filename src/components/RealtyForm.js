import React, { useState } from 'react'
import { realtyTypes as data } from './realty-types'
import flat from './logos/flat-logo.svg'
import apart from './logos/apart-logo.svg'
import room from './logos/room-logo.svg'
import house from './logos/house-logo.svg'


const url = {
  flat, apart, room, house
}

export const RealtyForm = ({ value, onChange }) => {
  const[ realtyType, setRealtyType] = useState(value) // это тут нужно?
  const handleChange = (e) => {
    setRealtyType(e.target.value)
    onChange(e.target.value)
  }
  return (
    <div className='realty-block'>
      <h1>Тип недвижимости</h1>
      <div className='realty-form items'>
        {data.map((el) => (
          <label key={el.id} style={{
              backgroundImage: `url(${url[el.id]})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center left',
            }}
          >
            <input
              checked={el.id === value}
              onChange={handleChange}
              value={el.id}
              type='radio'
              name='estate'
            />
            <h2>{el.type}</h2>
          </label>
        ))}
      </div>
    </div>
  )
}

// bank: "bank-psb" | "bank-bgf" | "bank-delta" | "bank-vtb" | "bank-sovcom" | "bank-gpb" | "bank-raif" | "bank-personal-loan-emulator" | "bank-rshb" | "bank-rgs" | "bank-alfa" | "bank-unicredit" | "bank-domrf"
// insurance: boolean
// initialPayment: number | undefined
// amount: number | undefined
//

//svg v css//как фон
//функции

// realtyType: "FLAT",
// productTypes: [
//   {productType: "NEW", name: "Новостройка"},
//   {productType: "USED", name: "Вторичка"},
// ],

// realtyType: "APARTMENTS",
// productTypes: [
//   {productType: "NEW", name: "Новостройка"},
//   {productType: "USED", name: "Вторичка"},
// ],

// realtyType: "COTTAGE",
// productTypes: [
//   {productType: "USED", name: "Готовый"},
//   {productType: "NEW", name: "От застройщика"},
//   {productType: "BUILD", name: "ИЖС"},
// ],

// realtyType: "ROOM",
// productTypes: [],
