import React from 'react'
import { Input } from './Input'

export const InputForm = ({onChange, value}) => {

  return (
    <div>
      <Input name='Первоначальный взнос' onChange={onChange} value={value.loan}/>
      <Input name='Размер кредита' onChange={onChange} value={value.payment}/>
    </div>
  )
}

