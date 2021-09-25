import React, { useState } from 'react'
import { realtyTypes as data } from './realty-types'

export const RealtyForm = () => {
  const [state, setState] = useState('apart')
  const handleChange = (e) => setState(e.target.value)

  return (
    <div className='realty-block'>
      <h1>Тип недвижимости</h1>
      <div className='realty-form items'>
        {data.map((el) => (
          <label key={el.id}>
            {el.pic}
            <input
              checked={el.id === state}
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
